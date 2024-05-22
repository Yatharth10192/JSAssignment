/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _course, _eyecolor, _bling) {
    const NFT = {
        "Name" : _name,
        "Course" :_course,
        "Eyecolor" : _eyecolor,
        "Bling" : _bling
    }
    NFTs.push(NFT);
    console.log("Minted: "+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<NFTs.length; i++) {
        console.log("\nID: \t\t "+ (i + 1));
        console.log("Name:\t\t " +NFTs[i].Name);
        console.log("Course: \t "+ NFTs[i].Course);
        console.log("Eyecolor:\t "+ NFTs[i].Eyecolor);
        console.log("Bling:\t\t "+ NFTs[i].Bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Yatharth", "Computer Science", "Grey", "Gold Chain");
mintNFT("Saloni", "Computer Science", "Brown", "Gold chain");
mintNFT("Lokesh", "Computer Science", "Black", "black chain");
mintNFT("Dev", "Computer Science", "Blue", "Silver chain");
listNFTs();
getTotalSupply();
