# StellarSDK Federation Validator


## Simple npm library to use with Stellar Federation addresses.


### Getting started
Start by importing the library into your project<br>
`import { * } from 'stellar-sdk-federation-validator'`

<br>

#### Validate federation address<br>
`validateFederationAddress(string: @federationAddress)` ex: "github*stashapp.cloud"

#### Validate multiple addresses<br>
`validateFederationAddresses(array: [..., @federationAddress])` ex: "github*stashapp.cloud"

#### Fetch federation address from G-address <br>

`fetchFederationAddress(string: @stellarAddress)` ex: "GAB..."

