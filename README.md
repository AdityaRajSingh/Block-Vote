# Block-Vote

*[Check this presentation to understand our project](https://docs.google.com/presentation/d/1ds6Hmaqtl3wEkaKsUDTKEA8mRXnYC4CNR0T72g4lfl8/edit?usp=sharing)

*[Demo of our project](https://youtu.be/BhVpoVl9xOU)
#  Decentralized E-Voting System Using Blockchain Technology


## **Introduction**


Our country has been frequently scandalised by Electronic Voting Machine (EVM) scams as of late. [Several reports and studies](https://indiaevm.org/evm_tr2010-jul29.pdf?source=post_page) have been brought into the public domain that allege that EVMs' hardware and software can be tampered with. Though the Election Commission of India (ECI) has denied each report stating that EVMs have equipment or programming vulnerabilities that can be abused to confer election malpractices.

## **Idea**
The working of E-Voting system using Blockchain is:

### Requesting to vote:
The user will have to log in to the voting system using his credentials- in this case, the e-voting system will use his Aadhaar Number, and the voting confirmation number provided to registered voters by the local
authorities. The system will check all information entered and, if matched with a valid voter, the user will be authorized to
cast a vote.

### Casting a vote:
Casting the vote will be done through a friendly user interface. For each voter a token is generated known as Ethereum, with initial Boolean value one, once a vote is casted it becomes zero. A voter can cast a vote if and only if Ethereum value is one. In this way revoting problem is resolved.

### Encrypting votes:
After the user casts his vote, the system will generate an input that contains the voter identification
number followed by the complete name of the voter as well as the hash of the previous vote. This way each input will be unique and ensure that the encrypted output will be unique as well. The encrypted information will be recorded in the block header of each vote cast. The information related to each vote will be encrypted using SHA one-way hash function that has no known reverse to it. The only theoretically possible way to reverse the hash would be to guess the seed data and the encryption method and then hash it to see if the results match. This way of hashing votes makes it nearly impossible to reverse engineer, therefore there would be no way voters' information could be retrieved.

### Adding the vote to the Blockchain:
After a block is created, and depending on the candidate selected, the information is
recorded in the corresponding blockchain. Each block gets linked to the previously cast vote.

![](https://res.cloudinary.com/practicaldev/image/fetch/s--a9s-VZ7n--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/qp8u0e1mo5dd7x1jhiot.png)


To ensure that the system is secure, the block will contain the previous voter’s information. If any of the
blocks were compromised, then it would be easy to find out since all blocks are connected to each other. The
blockchain is decentralized and cannot be corrupted, no single point of failure exists. The blockchain is where the
actual voting takes place. The user’s vote gets sent to one of the nodes on the system, and the node then adds the vote
to the blockchain. The voting system will have a node in each district to ensure the system is decentralized.

## **Advantages of Voting on Blockchain**

* Eliminate voter fraud and ensure Right to Vote:

* Transparent Elections:

* A secure Voting Platform:

* Voting made Accessible to every citizen:


## **Technology Stack**

* Node.js, HTML, CSS
* Javascript
* Solidity
* Ethereum
* Azure Blockchain

## **APIs, Datasources and Documentation**
* [Datasets on Open Government Data Platform India](https://data.gov.in/)
* [Azure Blockchain Workbench Documentation](https://docs.microsoft.com/en-us/azure/blockchain/workbench/)

