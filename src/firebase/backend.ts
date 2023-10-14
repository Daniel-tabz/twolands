import { auth, googleProvider, db } from "./config";

import abi from "./abi.json";
import token from "./token.json";
import { contractAddress, tokenAddress } from "./contract";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
// import { usePrepareContractWrite } from "wagmi";
import Web3 from "web3";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useWeb3Modal } from '@web3modal/wagmi/react'
// // const { open } = useWeb3Modal()
export const signUP = async (emails: string, password: string) => {
  try {
    console.log(emails, password);
    // Sign in with Google
    const authResult = await createUserWithEmailAndPassword(
      auth,
      emails,
      password
    );

    const { email, displayName, photoURL } = authResult.user;

    // Check if the user's email already exists in Firestore
    const userQuery = query(
      collection(db, "users"),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.size === 0) {
      const wallet = ethers.Wallet.createRandom();

      // Get the generated wallet address and private key
      const publicKey = wallet.address;
      const privateKey = wallet.privateKey;

      // Store user data in Firestore
      const userData = {
        name: displayName,
        email: email,
        photoURL: photoURL,
        walletAddress: publicKey,
        privateKey: privateKey,
      };

      const userRef = doc(db, "users", publicKey);

      // Set the user data in Firestore
      await setDoc(userRef, userData);
      alert("Signup Successfully");
      console.log(
        "User profile created and data stored in Firestore.",
        userData
      );
      return userData;
      //  const jsonString = JSON.stringify(userData);
      //  localStorage.setItem("userData", jsonString);
      //  window.location.href = "/inventory/token"
    } else {
      alert("User Already exist");
      console.log("USer already exist");
      window.location.href = "/";
      return "User already exist";
    }
  } catch (error) {
    console.log(error);
    alert("Something Went Wrong");
  }
};

export const signInWithGoogle = async () => {
  try {
    // Sign in with Google
    const authResult = await signInWithPopup(auth, googleProvider);

    const { email, displayName, photoURL } = authResult.user;

    // Check if the user's email already exists in Firestore
    const userQuery = query(
      collection(db, "users"),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.size === 0) {
      // User email doesn't exist in Firestore, proceed to create and store user data

      // Create a new wallet using ethers.js
      const wallet = ethers.Wallet.createRandom();

      // Get the generated wallet address and private key
      const publicKey = wallet.address;
      const privateKey = wallet.privateKey;

      // Store user data in Firestore
      const userData = {
        name: displayName,
        email: email,
        photoURL: photoURL,
        walletAddress: publicKey,
        privateKey: privateKey,
      };

      const userRef = doc(db, "users", publicKey);

      // Set the user data in Firestore
      await setDoc(userRef, userData);

      console.log("User profile created and data stored in Firestore.");
      const jsonString = JSON.stringify(userData);
      localStorage.setItem("userData", jsonString);
      window.location.href = "/";
    } else {
      // User email already exists in Firestore, you can handle this case accordingly
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        console.log("User data from Firestore:", userData);
        const jsonString = JSON.stringify(userData);
        localStorage.setItem("userData", jsonString);
        alert("Signup Success");
        window.location.href = "/";
        // window.location.href = "/inventory/token"
        // You can access user data here and perform any necessary actions
      });
    }
  } catch (err) {
    alert("Something Went Wrong");
    console.error(err);
  }
};

export const signIn = async (emails: string, password: string) => {
  try {
    // Sign in with email and password
    const authResult = await signInWithEmailAndPassword(auth, emails, password);

    // Destructure user data
    const { email } = authResult.user;

    // Check if the user's email already exists in Firestore
    const userQuery = query(
      collection(db, "users"),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.size === 0) {
      // User doesn't exist in Firestore, you can handle this case accordingly
      console.log("User does not exist in Firestore.");
    } else {
      // User with the same email already exists in Firestore
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        console.log("User data from Firestore:", userData);
        const jsonString = JSON.stringify(userData);
        localStorage.setItem("userData", jsonString);

        alert("SignIn Successfully");
        console.log(
          "User profile created and data stored in Firestore.",
          userData
        );
        window.location.href = "/";
        return userData;
        // window.location.href = "/inventory/token"
        // You can access user data here and perform any necessary actions
      });
    }
  } catch (error) {
    console.log(error);
    alert("Something Went Wrong");
    // Handle authentication errors here, such as incorrect password, user not found, etc.
  }
};

export const initMetaMask = async () => {
  try {
    // Check if MetaMask is installed
    if ((window as any).ethereum) {
      // Use type assertion here
      new Web3((window as any).ethereum);

      // Request access to the user's MetaMask account
      const accounts = await (window as any).ethereum.enable();
      const address = accounts[0];
      const userData = {
        name: null,
        email: null,
        photoURL: null,
        walletAddress: address,
        privateKey: null,
      };
      const jsonString = JSON.stringify(userData);
      localStorage.setItem("userData", jsonString);
      window.location.href = "/";
      // window.location.href = "/inventory/token"
      // Set the wallet address

      // Check if the Polygon network is available in MetaMask
      if ((window as any).ethereum.isPolygon) {
        // Use type assertion here
        // Replace with the correct Polygon (Matic) RPC URL
        const polygonRpcUrl = "https://rpc.ankr.com/eth";

        // Switch to the Polygon network
        await (window as any).ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x1", // Chain ID for the Polygon Mainnet
              chainName: "Ethereum Mainnet",
              rpcUrls: [polygonRpcUrl],
              nativeCurrency: {
                name: "ETH",
                symbol: "ETH",
                decimals: 18,
              },
              blockExplorerUrls: ["https://etherscan.io/"],
            },
          ],
        });

        console.log("Switched to Ethereum Mainnet");

        // Get the wallet balance
      } else {
        console.error("Ethereum network not available in MetaMask");
      }
    } else {
      console.error("MetaMask is not installed");
    }
  } catch (error) {
    alert("Something Went Wrong");
    console.error("Error:", error);
  }
};

export const getEthBalance = async (address: any) => {
  try {
    // Connect to an Ethereum provider (you can use a public one like Infura)
    const provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78"
    );
    console.log(address, "address in backend");
    // Fetch the balance of the address
    const balanceWei = await provider.getBalance(address);

    // Convert the balance from Wei to Ether
    const balanceEth = ethers.utils.formatEther(balanceWei);

    return balanceEth;
  } catch (error) {
    console.error("Error fetching Ethereum balance:", error);
    return "Error";
  }
};

export async function minting(
  privateKey: any,
  address: any,
  teir: any,
  amounts: any
) {
  try {
    toast("Processing....");
    console.log(privateKey, address, teir, amounts);
    const node =
      "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78";
    const provider = new ethers.providers.JsonRpcProvider(node);

    // Replace 'YOUR_PRIVATE_KEY' with the actual private key

    const wallet = new ethers.Wallet(privateKey, provider);

    // const gasPrice = await provider.getGasPrice();
    const tokens = new ethers.Contract(tokenAddress, token, wallet);
    const contract = new ethers.Contract(contractAddress, abi, wallet);
    console.log(contract, wallet);
    // Define the function parameters
    const to = address; // Replace with the recipient's address
    const amount = amounts; // Replace with the desired amount
    const tier = teir; // Replace with the desired tier
    console.log(to, amount);
    const allownce = await tokens.allowance(address, contractAddress);
    const gasPrice = await provider.getGasPrice();

    // Convert gas price to Gwei
    const gasPriceGwei = ethers.utils.formatUnits(gasPrice, "gwei");

    console.log(`Current Gas Price: ${gasPriceGwei} Gwei`);
    const allowanceBalance = parseFloat(ethers.utils.formatEther(allownce));
    console.log(allowanceBalance);
    if (allowanceBalance <= 0) {
      const val = await tokens.approve(contractAddress, 10000, {
        maxFeePerGas: Math.floor(Number(gasPriceGwei)) + 2,
        maxPriorityFeePerGas: Math.floor(Number(gasPriceGwei)) + 2,
        gasLimit: 285000,
      });
      val.wait();
      console.log(val, gasPrice);
      const tx = await contract.safeMintUSDC(to, amount, tier, {
        maxFeePerGas: Math.floor(Number(gasPriceGwei)) + 2,
        maxPriorityFeePerGas: Math.floor(Number(gasPriceGwei)) + 2,
        gasLimit: 285000,
      });
      console.log(tx.hash);
      toast(`Transaction is in process Here is the hash ${tx.hash}`);
      const receipt = await tx.wait();
      console.log(receipt.status);
    } else {
      const tx = await contract.safeMintUSDC(to, amount, tier, {
        maxFeePerGas: Math.floor(Number(gasPriceGwei)) + 2,
        maxPriorityFeePerGas: Math.floor(Number(gasPriceGwei)) + 2,
        gasLimit: 285000,
      });
      console.log(tx.hash);
      toast(`Transaction is in process Here is the hash ${tx.hash}`);
      const receipt = await tx.wait();
      console.log(receipt.status);
    }
  } catch (error: any) {
    console.log(error);
    let errorMessage =
      (error?.message && error.message) ||
      (error?.data && error.data.message && error.data.message) ||
      "Transaction Failed";
    errorMessage = errorMessage.slice(0, 28);
    toast.error(errorMessage);
  }
}
export async function checkWhitelist(address: any) {
  try {
    console.log(address, "address");
    const node =
      "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78";
    const provider = new ethers.providers.JsonRpcProvider(node, 80001);

    const contract = new ethers.Contract(contractAddress, abi, provider);
    console.log(abi);
    const status = await contract.whiteListed(address);
    console.log(status);

    return status;
  } catch (error) {
    console.log(error);
  }
}
