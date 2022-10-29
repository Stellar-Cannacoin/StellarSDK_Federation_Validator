import axios from "axios"

const validateFederationAddress = (address) => {
    return new Promise (async (resolve, reject) => {
        let tomlLookup = await 
axios.get("https://"+address.split("*")[1]+"/.well-known/stellar.toml")
        let federationUrl = tomlLookup.data.split('FEDERATION_SERVER="')[1].split('"')[0]

        axios.get(federationUrl+"?q="+address+"&type=name")
        .then(response => {
            if (response.data.error) {
                reject({error: "not found"})
            }
            resolve(response.data)
        }).catch(error => {
            console.log(error)
            reject({error: "not found"})
        })
    })
}

const fetchFederationAddress = (address) => {
    return new Promise (async (resolve, reject) => {
        let tomlLookup = await 
axios.get("https://"+address.split("*")[1]+"/.well-known/stellar.toml")
        let federationUrl = tomlLookup.data.split('FEDERATION_SERVER="')[1].split('"')[0]

        axios.get(federationUrl+"?q="+address+"&type=id")
        .then(response => {
            if (response.data.error) {
                reject({error: "not found"})
            }
            resolve(response.data.stellar_address)
        }).catch(error => {
            console.log(error)
            reject({error: "not found"})
        })
    })
}

const validateFederationAddresses = (addresses) => {
    return new Promise (async (resolve, reject) => {
        var returnArray = [];
        await addresses.map(async(address) => {
            let tomlLookup = await 
axios.get("https://"+address.split("*")[1]+"/.well-known/stellar.toml")
            let federationUrl = tomlLookup.data.split('FEDERATION_SERVER="')[1].split('"')[0]
            
            let response = await axios.get(federationUrl+"?q="+address+"&type=name")
            
            if (response.data.error || response.data.memo == "not found") {
                // reject({error: "not found"})
                return;
            }
            returnArray.push(response.data.account_id)
        })
        resolve(returnArray)
    })
}

export { validateFederationAddress, fetchFederationAddress, validateFederationAddresses }
