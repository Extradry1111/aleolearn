/**
 * AleoLearn Script - Enhanced Version
 * Features: Step-by-step quizzes, ZK simulator modal, expanded content, improved UX.
 */

const LESSONS = [
    { id: 1, title: "Introduction to Aleo: Privacy by Default" },
    { id: 2, title: "Understanding Zero-Knowledge Proofs (ZKPs)" },
    { id: 3, title: "The Leo Programming Language: Syntax and Basics" },
    { id: 4, title: "Aleo Architecture: Validators, Provers, and Records" },
    { id: 5, title: "Deploying and Executing Your First Private Program" },
    { id: 6, title: "Transaction Models and State Management in Aleo" }
];
const LESSON_CONTENT = {
    1: `
        <h4>What is Aleo?</h4>
        <p>Aleo is the first developer platform for building fully private, scalable, and cost-effective applications. Unlike traditional blockchains where all data is public and transparent, Aleo enables developers to create applications where user data remains completely private while still maintaining verifiability and trust.</p>
        
        <h4>The Privacy Problem in Web3</h4>
        <p>Today's blockchain applications expose sensitive user information: wallet balances, transaction histories, trading strategies, and personal data are all visible on-chain. This transparency creates serious privacy concerns for individuals and makes many real-world use cases impossible to implement on public blockchains.</p>
        <p>Aleo solves this by leveraging <strong>zero-knowledge cryptography</strong> - allowing computations to be verified without revealing the underlying data. This means you can prove something is true without exposing why it's true.</p>
        
        <h4>Key Features of Aleo</h4>
        <ul>
            <li><strong>Privacy by Default:</strong> All transactions and program executions are private unless explicitly made public</li>
            <li><strong>Scalable:</strong> Off-chain execution with on-chain verification reduces network congestion</li>
            <li><strong>Developer-Friendly:</strong> Leo programming language designed specifically for private applications</li>
            <li><strong>Decentralized:</strong> Powered by a network of validators and provers maintaining security</li>
        </ul>
        
        <h4>How Aleo Works</h4>
        <p>Aleo's architecture separates computation from consensus. Programs execute off-chain on users' devices, generating zero-knowledge proofs that validate the execution. Only these compact proofs are posted to the blockchain, where validators verify them without seeing the private inputs.</p>
        
        <h4>Real-World Applications</h4>
        <p>Aleo enables previously impossible use cases: private DeFi (hiding trading positions and balances), confidential voting systems, private identity verification, secure healthcare records on blockchain, and private supply chain tracking. The possibilities are endless when privacy meets programmability.</p>
        
        <h4>The Aleo Ecosystem</h4>
        <p>The platform consists of several components: <strong>Leo</strong> (the programming language), <strong>snarkOS</strong> (the network node software), <strong>snarkVM</strong> (the virtual machine executing programs), and <strong>Aleo Credits</strong> (the native token for fees and incentives).</p>
    `,
    
    2: `
        <h4>Understanding Zero-Knowledge Proofs</h4>
        <p>Zero-Knowledge Proofs (ZKPs) are revolutionary cryptographic techniques that allow one party (the prover) to convince another party (the verifier) that a statement is true, without revealing any information beyond the validity of the statement itself.</p>
        
        <h4>A Simple Example</h4>
        <p>Imagine you need to prove you're over 21 to enter a venue. With traditional methods, you show your ID revealing your exact birthdate, address, and photo. With a zero-knowledge proof, you can prove you're over 21 without revealing any other personal information - not even your exact age.</p>
        
        <h4>The Three Properties of ZKPs</h4>
        <p><strong>1. Completeness:</strong> If the statement is true, an honest verifier will be convinced by an honest prover.</p>
        <p><strong>2. Soundness:</strong> If the statement is false, no cheating prover can convince the verifier (except with negligible probability).</p>
        <p><strong>3. Zero-Knowledge:</strong> The verifier learns nothing beyond the truth of the statement - no additional information is leaked.</p>
        
        <h4>zk-SNARKs: Aleo's Secret Weapon</h4>
        <p>Aleo uses <strong>zk-SNARKs</strong> (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge). Let's break down what this means:</p>
        <ul>
            <li><strong>Zero-Knowledge:</strong> No information leakage beyond validity</li>
            <li><strong>Succinct:</strong> Proofs are tiny (kilobytes) and verify quickly (milliseconds)</li>
            <li><strong>Non-Interactive:</strong> The prover sends one message - no back-and-forth needed</li>
            <li><strong>Argument of Knowledge:</strong> Proves not just truth, but that the prover knows why it's true</li>
        </ul>
        
        <h4>How zk-SNARKs Work in Aleo</h4>
        <p>When you execute a Leo program on Aleo:</p>
        <ol>
            <li>Your program is compiled into an arithmetic circuit (mathematical representation)</li>
            <li>During execution, a witness (your private inputs) is processed through the circuit</li>
            <li>A cryptographic proof is generated showing the computation was performed correctly</li>
            <li>This proof is posted to the blockchain where validators verify it instantly</li>
            <li>The validators never see your private inputs - only the proof of correctness</li>
        </ol>
        
        <h4>The Mathematics Behind Privacy</h4>
        <p>zk-SNARKs rely on elliptic curve cryptography and polynomial commitments. While the math is complex, the key insight is elegant: we can transform any computation into a polynomial equation, and prove we solved it correctly without revealing the solution.</p>
        
        <h4>Performance and Efficiency</h4>
        <p>Generating proofs requires significant computation (the "prover time"), but verification is extremely fast. This asymmetry is perfect for blockchain: users generate proofs locally, and validators verify them quickly. A proof for a complex program might take seconds to generate but milliseconds to verify.</p>
        
        <h4>Privacy Guarantees</h4>
        <p>The cryptographic security of zk-SNARKs is based on computational hardness assumptions. Breaking these assumptions would require solving mathematical problems that even quantum computers can't efficiently solve with current knowledge. This provides strong privacy guarantees for Aleo applications.</p>
    `,
    
    3: `
        <h4>Introducing Leo: Programming Language for Private Applications</h4>
        <p>Leo is a statically-typed programming language designed specifically for writing private applications on Aleo. Think of it as a specialized tool built from the ground up for zero-knowledge programming, combining the safety of strongly-typed languages with the expressiveness needed for complex private computations.</p>
        
        <h4>Why a New Language?</h4>
        <p>Existing languages weren't designed for zero-knowledge circuits. Leo bridges this gap by providing familiar syntax while enforcing constraints necessary for ZK proofs. It automatically handles the complex process of converting your code into arithmetic circuits that generate zk-SNARKs.</p>
        
        <h4>Core Language Features</h4>
        <p><strong>Static Typing:</strong> Every variable has a declared type, catching errors at compile-time rather than runtime. This is crucial for ZK programs where runtime errors aren't possible.</p>
        <p><strong>Privacy Modifiers:</strong> Variables can be explicitly marked as <code>private</code> or <code>public</code>, giving developers fine-grained control over what data remains hidden.</p>
        <p><strong>Record System:</strong> Leo uses records (encrypted state containers) instead of traditional account balances, enabling truly private transactions.</p>
        
        <h4>Basic Syntax and Structure</h4>
        <pre>
// Define a Leo program
program token.aleo {
    // Records represent encrypted state
    record Token {
        owner: address,
        amount: u64,
    }
    
    // Transition function (program entry point)
    transition transfer(
        sender: Token,
        receiver: address,
        amount: u64
    ) -> (Token, Token) {
        // Validate sufficient balance
        let remaining: u64 = sender.amount - amount;
        
        // Create new records
        let sender_record: Token = Token {
            owner: sender.owner,
            amount: remaining,
        };
        
        let receiver_record: Token = Token {
            owner: receiver,
            amount: amount,
        };
        
        return (sender_record, receiver_record);
    }
}
        </pre>
        
        <h4>Data Types in Leo</h4>
        <p>Leo supports multiple data types optimized for ZK circuits:</p>
        <ul>
            <li><strong>Integers:</strong> u8, u16, u32, u64, u128, i8, i16, i32, i64, i128</li>
            <li><strong>Field:</strong> Elements of a finite field used in cryptographic operations</li>
            <li><strong>Boolean:</strong> true/false values</li>
            <li><strong>Address:</strong> Aleo blockchain addresses</li>
            <li><strong>Struct:</strong> Custom composite types</li>
            <li><strong>Record:</strong> Encrypted state containers with ownership</li>
        </ul>
        
        <h4>Functions and Transitions</h4>
        <p>Leo programs contain <strong>transitions</strong> - functions that can be executed on-chain. Transitions consume input records and produce output records, similar to UTXO transactions. Helper functions can be defined for code organization.</p>
        
        <h4>Privacy in Practice</h4>
        <pre>
// Private inputs are never revealed on-chain
transition compute_score(
    score_a: u64.private,
    score_b: u64.private,
    multiplier: u64.public
) -> u64.private {
    let total: u64 = (score_a + score_b) * multiplier;
    return total;
}
// Only the proof of correct computation is public
        </pre>
        
        <h4>Advanced Features</h4>
        <p><strong>Assertions:</strong> Use <code>assert</code> and <code>assert_eq</code> to enforce conditions that must hold true.</p>
        <p><strong>Conditionals:</strong> Leo supports if-else statements, but both branches must execute in ZK circuits (the result is selected based on the condition).</p>
        <p><strong>Loops:</strong> Limited support for loops with known bounds at compile time.</p>
        
        <h4>Development Workflow</h4>
        <p>Developers write Leo code, compile it to Aleo instructions, test locally, generate proofs, and deploy to the network. The Leo compiler handles the complex process of circuit generation automatically.</p>
    `,
    
    4: `
        <h4>Aleo's Unique Architecture</h4>
        <p>Aleo's architecture is fundamentally different from traditional blockchains. It separates computation from consensus, enabling private execution at scale. Understanding this architecture is key to building effective applications on the platform.</p>
        
        <h4>The Three-Layer Model</h4>
        <p><strong>1. Execution Layer:</strong> Where Leo programs run off-chain on users' devices, generating zero-knowledge proofs of correct execution.</p>
        <p><strong>2. Proof Generation Layer:</strong> Specialized provers create zk-SNARK proofs, computationally intensive but parallelizable.</p>
        <p><strong>3. Consensus Layer:</strong> Validators verify proofs and maintain the blockchain state, a lightweight process compared to proof generation.</p>
        
        <h4>Proof-of-Succinct-Work (PoSW)</h4>
        <p>Aleo's consensus mechanism, PoSW, combines proof generation with stake-based validation. Unlike Proof-of-Work where miners solve arbitrary puzzles, PoSW provers perform useful work: generating proofs for real transactions.</p>
        <p>This creates a sustainable economic model where computational resources directly serve application needs rather than being wasted on arbitrary hashing.</p>
        
        <h4>Network Participants</h4>
        <p><strong>Users:</strong> Execute Leo programs locally on their devices, generating proofs without revealing private inputs.</p>
        <p><strong>Provers:</strong> Specialized nodes that generate zk-SNARK proofs for transactions. They're rewarded with block rewards and transaction fees. Proving is computationally intensive but can be parallelized across GPUs.</p>
        <p><strong>Validators:</strong> Stake Aleo credits to participate in consensus. They verify proofs (a fast operation), propose blocks, and finalize the chain. Validators earn rewards proportional to their stake.</p>
        <p><strong>Developers:</strong> Build private applications using Leo, deploy programs to the network, and interact with on-chain state.</p>
        
        <h4>The Record Model</h4>
        <p>Aleo uses a record-based system similar to Bitcoin's UTXO model, but with encryption. Each record is an encrypted piece of state owned by an address. Transactions consume input records and create output records, with zero-knowledge proofs ensuring validity without revealing contents.</p>
        <pre>
// A record example
record Token {
    owner: address,     // Who owns this record
    amount: u64,        // Encrypted amount
    token_id: field,    // Encrypted token identifier
}
        </pre>
        
        <h4>Transaction Lifecycle</h4>
        <ol>
            <li><strong>Execution:</strong> User runs a Leo program locally with private inputs</li>
            <li><strong>Proof Generation:</strong> A zk-SNARK proof is created showing correct execution</li>
            <li><strong>Broadcasting:</strong> Transaction (inputs, outputs, proof) is broadcast to the network</li>
            <li><strong>Verification:</strong> Provers or validators verify the proof quickly</li>
            <li><strong>Inclusion:</strong> Valid transactions are included in blocks</li>
            <li><strong>Finalization:</strong> The block is finalized through consensus</li>
        </ol>
        
        <h4>State Management</h4>
        <p>Unlike account-based chains, Aleo doesn't have global mutable state. Instead, state is represented by unspent records. This design enables better parallelization and privacy since records are independent encrypted units.</p>
        
        <h4>Program Deployment</h4>
        <p>Leo programs are deployed to the network and stored on-chain. Once deployed, anyone can execute the program's functions. The program code is public, but execution inputs and outputs can be private.</p>
        
        <h4>Network Security</h4>
        <p>Aleo's security comes from cryptographic proofs, not computational redundancy. Validators don't re-execute transactions; they verify proofs. This enables privacy while maintaining strong security guarantees backed by the network's total stake.</p>
        
        <h4>Scalability Advantages</h4>
        <p>By moving execution off-chain and only verifying compact proofs on-chain, Aleo achieves superior scalability. A complex program execution might generate megabytes of computation but only a kilobyte-sized proof that validators process in milliseconds.</p>
    `,
    
    5: `
        <h4>Building Your First Private Application</h4>
        <p>Let's walk through the complete process of creating, testing, and deploying a private application on Aleo. This lesson covers practical development workflows, tools, and best practices.</p>
        
        <h4>Development Environment Setup</h4>
        <p>First, install the required tools:</p>
        <pre>
# Install Leo
bash -c "$(curl -fsSL https://raw.githubusercontent.com/AleoHQ/leo/testnet3/leo/install.sh)"

# Install snarkOS (optional, for running a node)
bash -c "$(curl -fsSL https://raw.githubusercontent.com/AleoHQ/snarkOS/testnet3/snarkos.sh)"

# Verify installation
leo --version
        </pre>
        
        <h4>Creating a New Project</h4>
        <p>Initialize a new Leo project with the following command:</p>
        <pre>
leo new my_private_app
cd my_private_app
        </pre>
        <p>This creates a project structure:</p>
        <pre>
my_private_app/
├── build/          # Compiled artifacts
├── inputs/         # Test input files
├── src/
│   └── main.leo   # Your program code
├── program.json    # Project configuration
└── README.md
        </pre>
        
        <h4>Writing Your First Program</h4>
        <p>Let's create a simple private voting system:</p>
        <pre>
program voting.aleo {
    // Record representing a vote
    record Vote {
        owner: address,
        candidate: u8,
        weight: u64,
    }
    
    // Cast a private vote
    transition cast_vote(
        voter: address,
        candidate: u8,
        weight: u64
    ) -> Vote {
        // Validate candidate ID (1-3)
        assert(candidate >= 1u8);
        assert(candidate <= 3u8);
        
        // Create vote record
        return Vote {
            owner: voter,
            candidate: candidate,
            weight: weight,
        };
    }
    
    // Tally votes (simplified example)
    transition count_vote(
        vote: Vote
    ) -> u64 {
        // Return the weight contribution
        return vote.weight;
    }
}
        </pre>
        
        <h4>Testing Locally</h4>
        <p>Create test inputs in <code>inputs/voting.in</code>:</p>
        <pre>
// Input for cast_vote function
[cast_vote]
voter: address = aleo1...;
candidate: u8 = 2u8;
weight: u64 = 100u64;
        </pre>
        
        <p>Execute the program locally:</p>
        <pre>
# Build the program
leo build

# Run with inputs
leo run cast_vote

# Output shows the execution results and generated proof
        </pre>
        
        <h4>Understanding the Build Process</h4>
        <p>When you run <code>leo build</code>, several things happen:</p>
        <ol>
            <li>Leo code is compiled to Aleo instructions (a low-level representation)</li>
            <li>Arithmetic circuits are generated for each transition</li>
            <li>Proving and verifying keys are created for the zk-SNARK system</li>
            <li>Build artifacts are stored in the <code>build/</code> directory</li>
        </ol>
        
        <h4>Generating Aleo Account</h4>
        <p>Before deploying, you need an Aleo account with credits:</p>
        <pre>
# Generate new account
leo account new

# This outputs:
# Private Key: APrivateKey...
# View Key: AViewKey...
# Address: aleo1...

# Save these securely - you'll need them!
        </pre>
        
        <h4>Deploying to Testnet</h4>
        <p>Deploy your program to the Aleo testnet:</p>
        <pre>
# First, ensure you have testnet credits
# Visit the faucet: faucet.aleo.org

# Deploy the program
leo deploy --network testnet3 --private-key YOUR_PRIVATE_KEY

# This broadcasts your program to the network
# Deployment fee is paid from your account balance
        </pre>
        
        <h4>Executing On-Chain</h4>
        <p>After deployment, execute program functions on-chain:</p>
        <pre>
leo execute cast_vote \\
  aleo1recipient... \\
  2u8 \\
  100u64 \\
  --network testnet3 \\
  --private-key YOUR_PRIVATE_KEY
        </pre>
        
        <h4>Monitoring and Debugging</h4>
        <p>Use the Aleo explorer to view your transactions:</p>
        <ul>
            <li>Visit explorer.aleo.org</li>
            <li>Search for your program name or transaction ID</li>
            <li>View program code, executions, and on-chain state</li>
        </ul>
        
        <h4>Best Practices</h4>
        <p><strong>Test Thoroughly:</strong> Use <code>leo test</code> to run unit tests before deployment.</p>
        <p><strong>Optimize Circuit Size:</strong> Smaller circuits generate proofs faster. Avoid unnecessary computation.</p>
        <p><strong>Handle Errors Gracefully:</strong> Use assertions to validate inputs and prevent invalid state.</p>
        <p><strong>Manage Keys Securely:</strong> Never share private keys or commit them to version control.</p>
        <p><strong>Estimate Costs:</strong> Deployment and execution cost credits. Test on testnet first.</p>
        
        <h4>Advanced Development</h4>
        <p>Explore more complex patterns: multi-signature schemes, private token systems, confidential auctions, and private DeFi protocols. The Leo documentation provides extensive examples and tutorials for advanced use cases.</p>
    `,
    
    6: `
        <h4>Advanced State Management in Aleo</h4>
        <p>Aleo's state management model is fundamentally different from account-based blockchains like Ethereum. Understanding this model is crucial for building sophisticated private applications.</p>
        
        <h4>The Record-Based UTXO Model</h4>
        <p>Aleo uses an enhanced UTXO (Unspent Transaction Output) model where each "output" is an encrypted record. Unlike Bitcoin's transparent UTXOs, Aleo records are fully encrypted and can contain complex structured data.</p>
        <p>This design provides several advantages: natural parallelization (records are independent), enhanced privacy (encrypted state), and efficient proof generation (only relevant records need to be processed).</p>
        
        <h4>Record Lifecycle</h4>
        <pre>
// Creating a record
record Asset {
    owner: address,
    id: field,
    value: u64,
    metadata: field,
}

transition create_asset(
    owner: address,
    id: field,
    value: u64
) -> Asset {
    return Asset {
        owner: owner,
        id: id,
        value: value,
        metadata: 0field,
    };
}

// Consuming and updating records
transition transfer_asset(
    input_record: Asset,
    new_owner: address
) -> Asset {
    // Input record is "spent" (consumed)
    // New record is created with updated state
    return Asset {
        owner: new_owner,
        id: input_record.id,
        value: input_record.value,
        metadata: input_record.metadata,
    };
}
        </pre>
        
        <h4>Public vs Private State</h4>
        <p>Aleo supports both private records and public on-chain mappings:</p>
        <p><strong>Private Records:</strong> Encrypted, only visible to the owner, can be spent once.</p>
        <p><strong>Public Mappings:</strong> On-chain key-value storage, visible to everyone, useful for global state like token supplies.</p>
        <pre>
program hybrid_token.aleo {
    // Private records for balances
    record Token {
        owner: address,
        amount: u64,
    }
    
    // Public mapping for total supply
    mapping total_supply: field => u64;
    
    transition mint(
        receiver: address,
        amount: u64
    ) -> Token {
        // Update public total supply
        return Token {
            owner: receiver,
            amount: amount,
        } then finalize(amount);
    }
    
    finalize mint(amount: u64) {
        // Access public mapping in finalize
        let current: u64 = total_supply.get_or_use(0field, 0u64);
        total_supply.set(0field, current + amount);
    }
}
        </pre>
        
        <h4>Transaction Structure</h4>
        <p>Every Aleo transaction contains:</p>
        <ul>
            <li><strong>Inputs:</strong> Records being consumed (encrypted references)</li>
            <li><strong>Outputs:</strong> New records being created (encrypted)</li>
            <li><strong>Proof:</strong> zk-SNARK proving valid state transition</li>
            <li><strong>Program ID:</strong> Which program executed</li>
            <li><strong>Function:</strong> Which transition was called</li>
        </ul>
        
        <h4>State Transitions and Finalization</h4>
        <p>Leo programs use a two-phase execution model:</p>
        <p><strong>Phase 1 - Transition:</strong> Processes private inputs/outputs, generates ZK proof.</p>
        <p><strong>Phase 2 - Finalize:</strong> Updates public on-chain state (mappings), executes after proof verification.</p>
        <p>This separation allows private computation with public side effects, enabling hybrid public-private applications.</p>
        
        <h4>Complex State Patterns</h4>
        <p><strong>Record Splitting:</strong> One record can be split into multiple records (like making change).</p>
        <pre>
transition split(
    input: Token,
    amount_a: u64,
    amount_b: u64
) -> (Token, Token) {
    assert_eq(input.amount, amount_a + amount_b);
    
    let token_a: Token = Token {
        owner: input.owner,
        amount: amount_a,
    };
    
    let token_b: Token = Token {
        owner: input.owner,
        amount: amount_b,
    };
    
    return (token_a, token_b);
}
        </pre>
        
        <p><strong>Record Merging:</strong> Multiple records combined into one.</p>
        <pre>
transition merge(
    token_a: Token,
    token_b: Token
) -> Token {
    // Verify same owner
    assert_eq(token_a.owner, token_b.owner);
    
    return Token {
        owner: token_a.owner,
        amount: token_a.amount + token_b.amount,
    };
}
        </pre>
        
        <h4>Privacy Preserving State Updates</h4>
        <p>State updates in Aleo maintain privacy through zero-knowledge proofs. When you consume a record and create a new one, observers see only:</p>
        <ul>
            <li>That a valid state transition occurred (via proof verification)</li>
            <li>Which program executed</li>
            <li>Public values (if any)</li>
        </ul>
        <p>They cannot see: record contents, input values, computation details, or recipient information (unless explicitly made public).</p>
        
        <h4>Optimizing State Management</h4>
        <p><strong>Minimize Record Size:</strong> Smaller records generate faster proofs.</p>
        <p><strong>Batch Operations:</strong> Process multiple state updates in single transitions when possible.</p>
        <p><strong>Use Public Mappings Wisely:</strong> Only for truly global state that must be visible.</p>
        <p><strong>Design for Parallelization:</strong> Independent records can be processed concurrently.</p>
        
        <h4>Real-World Application Patterns</h4>
        <p><strong>Private Token System:</strong> Records represent balances, transfers consume and create records.</p>
        <p><strong>Confidential Voting:</strong> Records are votes, tallying happens via finalize with public results.</p>
        <p><strong>Private Auctions:</strong> Bids as encrypted records, winner determination in finalize.</p>
        <p><strong>Credential Systems:</strong> Records are credentials, verification happens without revealing credential details.</p>
        
        <h4>Future Developments</h4>
        <p>Aleo's state model continues evolving with improvements to: recursive proofs (proof composition), cross-program calls (program interaction), state indexing (efficient querying), and layer-2 solutions (additional scalability).</p>
    `
};

const QUIZZES = {
    1: [
        { q: "What is Aleo's primary mission?", options: ["High TPS DeFi", "Privacy-by-default apps", "NFT marketplace", "Identity management"], answer: 1, hint: "Review the 'Why Privacy Matters' section" },
        { q: "Which tech enables Aleo's privacy?", options: ["Merkle Trees", "Zero-Knowledge Proofs", "Sidechains", "State Channels"], answer: 1, hint: "Focus on 'Key Concept: ZKPs'" },
        { q: "Leo is a language for…", options: ["Smart contracts on Bitcoin", "Zero-knowledge applications on Aleo", "Managing validators", "Building UI"], answer: 1, hint: "Lesson mentions Leo as Aleo's programming language" },
        { q: "Where are Leo programs executed?", options: ["Directly on-chain", "Off-chain with proofs posted on-chain", "Inside wallets", "Only on testnet"], answer: 1, hint: "Reread the section about execution model" },
        { q: "What gets published to the chain for privacy?", options: ["Raw user data", "Proof of execution", "Plaintext inputs", "Password hashes"], answer: 1, hint: "Study how ZK proofs work" }
    ],
    2: [
        { q: "What does zk-SNARK stand for?", options: ["Zero-Knowledge Succinct Non-Interactive Argument of Knowledge", "Zero Knowledge Secure Network and Reliable Key", "Zone-Key Smart Non-Interactive Relay Knowledge", "Zero-Knowledge Simple Non-Interactive Raw Key"], answer: 0, hint: "Review Lesson 2 introduction" },
        { q: "Which property ensures proofs are fast to verify?", options: ["Zero-Knowledge", "Succinctness", "Non-Interactive", "Completeness"], answer: 1, hint: "Check 'zk-SNARK Properties'" },
        { q: "In Aleo, who generates the proof?", options: ["Validator", "Miner", "Prover", "Auditor"], answer: 2, hint: "Study roles in Architecture lesson" },
        { q: "What is sent to validators after off-chain execution?", options: ["Program source", "Compiled circuit only", "Proof + transaction", "Private inputs"], answer: 2, hint: "Review 'The Proving Process'" },
        { q: "Zero-Knowledge means…", options: ["No data stored", "Verification without revealing underlying data", "Proofs require interaction", "Keys rotate daily"], answer: 1, hint: "Revisit core ZKP definition" }
    ],
    3: [
        { q: "Leo's type system is…", options: ["Dynamic", "Untyped", "Statically typed", "Assembly-based"], answer: 2, hint: "Check Lesson 3 intro" },
        { q: "How do you declare a private input in Leo?", options: ["input x as u64;", "input x as u64.private;", "private u64 x;", "let x: u64;"], answer: 1, hint: "Review code examples in Lesson 3" },
        { q: "What does Leo compile into?", options: ["WASM modules", "Arithmetic circuits for ZK proofs", "EVM bytecode", "Native binaries"], answer: 1, hint: "Study the compilation process" },
        { q: "Records in Leo represent…", options: ["UI components", "Encrypted on-chain state", "Validator keys", "Snark proofs"], answer: 1, hint: "Focus on the Records section" },
        { q: "Outputs can be…", options: ["Only private", "Only public", "Private or public", "Ciphertext only"], answer: 2, hint: "Check function output examples" }
    ],
    4: [
        { q: "Aleo's consensus is called…", options: ["Proof-of-Stake", "Proof-of-Work", "Proof-of-Succinct-Work", "Delegated Proof-of-SNARK"], answer: 2, hint: "Review Architecture lesson intro" },
        { q: "Provers are rewarded for…", options: ["Running validators", "Generating valid proofs", "Storing data", "Writing Leo code"], answer: 1, hint: "Study Prover role in Lesson 4" },
        { q: "Validators are responsible for…", options: ["Producing proofs", "Executing Leo programs", "Verifying proofs and finalizing blocks", "Minting records"], answer: 2, hint: "Check 'Roles' section" },
        { q: "Execution happens…", options: ["Only onchain", "Offchain with proof submission", "In browsers", "On testnet nodes only"], answer: 1, hint: "Review Transaction Lifecycle" },
        { q: "Records hold…", options: ["Plaintext balances", "Encrypted state data", "DNS entries", "Validator votes"], answer: 1, hint: "Study what records contain" }
    ],
    5: [
        { q: "What command creates a new Leo project?", options: ["leo init", "leo new my_app", "aleo create", "zk start"], answer: 1, hint: "Check 'Project Setup' section" },
        { q: "Which command compiles and generates proving keys?", options: ["leo run", "leo build", "aleo deploy", "leo keys"], answer: 1, hint: "Review 'Compile & Prove'" },
        { q: "leo run main does what?", options: ["Deploys the program", "Executes and proves the program", "Starts a validator", "Generates a wallet"], answer: 1, hint: "Study execution commands" },
        { q: "To deploy on-network you use…", options: ["leo deploy", "aleo deploy", "snarkos deploy", "leo publish"], answer: 1, hint: "Check deployment section" },
        { q: "Deployment requires…", options: ["ETH gas", "Aleo credits", "Bitcoin fees", "Validator approval"], answer: 1, hint: "Review deployment costs" }
    ],
    6: [
        { q: "Aleo's state model is closest to…", options: ["Account model", "UTXO model", "Hybrid PoS", "Sharded state"], answer: 1, hint: "Study Lesson 6 intro" },
        { q: "Records are…", options: ["Public logs", "Encrypted assets/states", "Validator lists", "Circuit outputs only"], answer: 1, hint: "Review record definition" },
        { q: "Private transfers burn inputs and…", options: ["Reveal values", "Create new encrypted outputs", "Call smart contracts", "Require multisig"], answer: 1, hint: "Check transaction workflow" },
        { q: "What ensures only owners can spend records?", options: ["Validator approval", "Plaintext balances", "Encryption + proofs", "Public signatures"], answer: 2, hint: "Study privacy mechanisms" },
        { q: "Privacy on Aleo is…", options: ["Optional", "Default", "Disabled", "Paid add-on"], answer: 1, hint: "Review privacy philosophy" }
    ]
};

const FLASHCARDS = [
    { term: "Zero-Knowledge Proof", definition: "Cryptographic method allowing one party to prove to another that a statement is true without revealing any information beyond the validity of the statement itself." },
    { term: "zk-SNARK", definition: "Zero-Knowledge Succinct Non-Interactive Argument of Knowledge - the specific ZKP technology used by Aleo for private computations." },
    { term: "Leo Language", definition: "Statically-typed programming language designed specifically for writing private applications that compile to zk-SNARK circuits." },
    { term: "Record", definition: "Encrypted state container on Aleo, similar to UTXO but with structured data. Can only be spent once by its owner." },
    { term: "Prover", definition: "Network participant who generates zk-SNARK proofs for transactions, performing computationally intensive work to enable private execution." },
    { term: "Validator", definition: "Network participant who verifies proofs and maintains consensus, ensuring blockchain integrity without seeing private data." },
    { term: "Transition", definition: "A function in Leo that can be executed on-chain, consuming input records and producing output records." },
    { term: "Finalize", definition: "Second phase of program execution that updates public on-chain state after private computation and proof verification." },
    { term: "Proof-of-Succinct-Work", definition: "Aleo's consensus mechanism where provers generate useful zk-SNARK proofs rather than solving arbitrary puzzles." },
    { term: "Circuit", definition: "Mathematical representation of a program as polynomial equations, used to generate zero-knowledge proofs." },
    { term: "Witness", definition: "The private input data known only to the prover, which is used to generate a proof without being revealed." },
    { term: "Aleo Credits", definition: "Native cryptocurrency of the Aleo network, used for transaction fees, deployment costs, and rewarding network participants." },
    { term: "snarkOS", definition: "Aleo's node software that handles networking, consensus, and proof verification for the decentralized network." },
    { term: "snarkVM", definition: "Aleo's virtual machine that executes Leo programs and generates zero-knowledge proofs." },
    { term: "Mapping", definition: "Public on-chain key-value storage in Aleo programs, visible to everyone, used for global state that must be transparent." },
    { term: "Private Input", definition: "Data marked as private in Leo programs, kept confidential through encryption and never revealed on the blockchain." },
    { term: "Public Output", definition: "Data explicitly marked as public in Leo programs, visible on-chain to all network participants." },
    { term: "Address", definition: "Aleo blockchain identifier derived from a user's public key, used to receive records and identify program owners." }
];

const LIBRARY_ENTRIES = [
    { 
        title: "Zero-Knowledge Proof (ZKP)", 
        content: "A cryptographic protocol allowing one party to prove knowledge of information to another party without revealing the information itself. ZKPs are the foundation of Aleo's privacy, enabling verifiable computation while preserving confidentiality. They satisfy three properties: completeness, soundness, and zero-knowledge." 
    },
    { 
        title: "zk-SNARK Technology", 
        content: "Zero-Knowledge Succinct Non-Interactive Argument of Knowledge is the specific form of ZKP used by Aleo. SNARKs are 'succinct' (small proof size), 'non-interactive' (one message from prover to verifier), and enable efficient verification. Aleo uses advanced SNARK constructions optimized for blockchain applications." 
    },
    { 
        title: "Leo Programming Language", 
        content: "A statically-typed, domain-specific language for writing private applications. Leo code compiles to arithmetic circuits that generate zk-SNARKs. It features privacy modifiers, record types, and transition functions. The syntax is familiar to developers while enforcing constraints necessary for zero-knowledge proofs." 
    },
    { 
        title: "Aleo Credits (ALEO)", 
        content: "The native cryptocurrency of the Aleo network. Credits are used to pay transaction fees, program deployment costs, and to incentivize provers and validators. The economic model aligns network security with useful computational work through the Proof-of-Succinct-Work consensus mechanism." 
    },
    { 
        title: "Record-Based State Model", 
        content: "Aleo uses an enhanced UTXO model where state is represented by encrypted records rather than account balances. Each record is owned by an address, contains structured data, and can be spent only once. This design enables parallelization, privacy, and efficient proof generation." 
    },
    { 
        title: "Proof-of-Succinct-Work (PoSW)", 
        content: "Aleo's consensus mechanism that rewards network participants for generating zk-SNARK proofs. Unlike Proof-of-Work's arbitrary puzzles, PoSW ties computational effort to useful work: proving transaction validity. This creates sustainable economics where resources serve application needs." 
    },
    { 
        title: "snarkOS Node Software", 
        content: "The core software powering Aleo network nodes. SnarkOS handles peer-to-peer networking, block production, consensus participation, and proof verification. Validators run snarkOS to participate in network security, while provers use it to contribute computational resources." 
    },
    { 
        title: "snarkVM Virtual Machine", 
        content: "Aleo's execution environment for running Leo programs and generating zero-knowledge proofs. The VM compiles Leo code to Aleo instructions, executes transitions, manages records, and interfaces with the proof system. It's designed for efficient proof generation and verification." 
    },
    { 
        title: "Private vs Public State", 
        content: "Aleo supports both private records (encrypted, owner-visible only) and public mappings (on-chain key-value storage visible to all). This hybrid model enables applications requiring both confidential user data and transparent global state, like private tokens with public total supply." 
    },
    { 
        title: "Transition and Finalize", 
        content: "Leo programs use two-phase execution: transitions process private inputs/outputs generating ZK proofs, while finalize blocks update public on-chain state after proof verification. This separation enables private computation with public side effects, crucial for hybrid applications." 
    },
    { 
        title: "Arithmetic Circuits", 
        content: "Mathematical representations of programs as systems of polynomial equations. Leo code compiles to circuits that can generate zk-SNARKs. Circuit size affects proving time - optimized circuits generate proofs faster, making efficient circuit design important for performance." 
    },
    { 
        title: "Trusted Setup Ceremonies", 
        content: "Cryptographic parameter generation required for certain SNARK systems. Aleo uses universal trusted setups that work for all programs, reducing trust assumptions. These ceremonies involve multiple participants, where honesty from just one participant ensures security." 
    }
];

let userProgress = initializeProgress();
let currentQuizState = null;

// --- INITIALIZATION ---------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    updateStreak();
    renderLessonsList();
    renderFlashcards();
    renderLibrary();
    updateGlobalProgress();
    showSection('home');

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(e.target.getAttribute('data-section'));
        });
    });
});

function initializeProgress() {
    const defaultState = { streak: 0, lastLogin: null, lessons: {} };
    LESSONS.forEach(lesson => {
        defaultState.lessons[lesson.id] = { completed: false, quizPassed: false, readProgress: 0 };
    });

    const saved = localStorage.getItem('aleoLearnProgress');
    if (!saved) return defaultState;

    const parsed = JSON.parse(saved);
    LESSONS.forEach(lesson => {
        if (!parsed.lessons[lesson.id]) {
            parsed.lessons[lesson.id] = { completed: false, quizPassed: false, readProgress: 0 };
        }
    });
    return parsed;
}

function saveProgress() {
    localStorage.setItem('aleoLearnProgress', JSON.stringify(userProgress));
    updateGlobalProgress();
}

// --- NAVIGATION -------------------------------------------------------------

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => section.classList.add('hidden'));
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

    const target = document.getElementById(sectionId);
    if (target) target.classList.remove('hidden');

    const navItem = document.querySelector(`[data-section="${sectionId}"]`);
    if (navItem) navItem.classList.add('active');

    if (sectionId === 'certificate') {
        checkCertificateEligibility();
    }
}

// --- PROGRESS & STREAK ------------------------------------------------------

function updateGlobalProgress() {
    const total = LESSONS.length;
    const passed = LESSONS.filter(lesson => userProgress.lessons[lesson.id]?.quizPassed).length;
    const percent = total ? Math.round((passed / total) * 100) : 0;

    const bar = document.getElementById('overall-progress-bar');
    const label = document.getElementById('progress-percent');
    if (bar) bar.style.width = `${percent}%`;
    if (label) label.textContent = `${percent}% Completed (${passed}/${total} Lessons Passed)`;

    renderLessonsList();
}

function updateStreak() {
    const today = new Date().toDateString();
    const last = userProgress.lastLogin;
    let streak = userProgress.streak || 0;

    if (last !== today) {
        if (last) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            streak = (last === yesterday.toDateString()) ? streak + 1 : 1;
        } else {
            streak = 1;
        }
        userProgress.streak = streak;
        userProgress.lastLogin = today;
    }

    const streakEl = document.getElementById('current-streak');
    const streakElHeader = document.getElementById('current-streak-header'); // NEW
    if (streakEl) streakEl.textContent = `${userProgress.streak} Days`;
    if (streakElHeader) streakElHeader.textContent = `${userProgress.streak} Days`; // NEW

    saveProgress();
}

// --- LESSONS ----------------------------------------------------------------

function renderLessonsList() {
    const container = document.getElementById('lessons-list');
    if (!container) return;
    container.innerHTML = '';

    LESSONS.forEach((lesson, index) => {
        const status = userProgress.lessons[lesson.id];
        const isCompleted = !!status.quizPassed;
        const isLocked = index > 0 && !userProgress.lessons[lesson.id - 1].quizPassed;

        const card = document.createElement('div');
        card.className = `lesson-card section-card ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`;

        let statusText = 'Start Lesson';
        let icon = '<i class="fas fa-play"></i>';
        if (isLocked) {
            statusText = 'Locked';
            icon = '<i class="fas fa-lock"></i>';
        } else if (isCompleted) {
            statusText = 'Quiz Passed';
            icon = '<i class="fas fa-check-circle"></i>';
        }

        card.innerHTML = `
            <p>Lesson ${lesson.id}</p>
            <h3>${lesson.title}</h3>
            <div class="lesson-status">
                <span>${statusText}</span>
                ${icon}
            </div>
        `;

        if (!isLocked) {
            card.addEventListener('click', () => openLesson(lesson.id));
        }

        container.appendChild(card);
    });
}

function openLesson(id) {
    showSection('lesson-viewer');

    document.getElementById('lesson-title').textContent = LESSONS[id - 1].title;
    document.getElementById('lesson-content-display').innerHTML = LESSON_CONTENT[id];

    const quizArea = document.getElementById('quiz-area');
    const lessonNavFooter = document.getElementById('lesson-navigation-footer'); // NEW
    const nextLessonBtn = document.getElementById('next-lesson-btn'); // NEW

    if (userProgress.lessons[id].quizPassed) {
        quizArea.classList.add('hidden');
        lessonNavFooter.classList.remove('hidden'); // Show next lesson button if quiz passed
        
        // Setup next lesson button
        const nextLessonId = id + 1;
        if (nextLessonId <= LESSONS.length) {
            nextLessonBtn.onclick = () => openLesson(nextLessonId);
            nextLessonBtn.textContent = `Go to Lesson ${nextLessonId}: ${LESSONS[nextLessonId-1].title} `;
            const arrowIcon = document.createElement('i');
            arrowIcon.className = 'fas fa-arrow-right';
            nextLessonBtn.appendChild(arrowIcon);
        } else {
            nextLessonBtn.textContent = 'Course Completed! View Certificate ';
            const trophyIcon = document.createElement('i');
            trophyIcon.className = 'fas fa-trophy';
            nextLessonBtn.appendChild(trophyIcon);
            nextLessonBtn.onclick = () => showSection('certificate');
        }

    } else {
        quizArea.classList.remove('hidden');
        lessonNavFooter.classList.add('hidden'); // Hide next lesson button
        startStepByStepQuiz(id);
    }

    const wrapper = document.querySelector('.lesson-content-wrapper');
    wrapper.scrollTop = 0;
    wrapper.onscroll = () => updateReadProgress(id, wrapper);
    updateReadProgress(id, wrapper, true);
}

function updateReadProgress(lessonId, container, init = false) {
    const scrollable = container.scrollHeight - container.clientHeight;
    const scrolled = container.scrollTop;
    let progress = 0;

    if (scrollable > 0) {
        progress = Math.min(100, Math.round((scrolled / scrollable) * 100));
    }

    if (init) {
        progress = userProgress.lessons[lessonId].readProgress || 0;
    } else {
        userProgress.lessons[lessonId].readProgress = progress;
        saveProgress();
    }

    document.getElementById('lesson-read-progress').style.width = `${progress}%`;
    document.getElementById('read-progress-percent').textContent = `${progress}%`;
}

// --- STEP-BY-STEP QUIZ -------------------------------------------------------

function startStepByStepQuiz(lessonId) {
    currentQuizState = {
        lessonId: lessonId,
        questions: QUIZZES[lessonId],
        currentIndex: 0,
        userAnswers: new Array(QUIZZES[lessonId].length).fill(null), // Store null for unanswered
        started: false
    };

    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('quiz-question-display').innerHTML = '';
    document.getElementById('quiz-navigation').classList.remove('hidden'); // Ensure navigation is visible
    document.getElementById('quiz-next-btn').onclick = handleQuizNext;
    document.getElementById('quiz-next-btn').textContent = "Next Question";
    
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const state = currentQuizState;
    const q = state.questions[state.currentIndex];
    
    document.getElementById('quiz-step-indicator').textContent = `Question ${state.currentIndex + 1} of ${state.questions.length}`;
    
    const container = document.getElementById('quiz-question-display');
    container.innerHTML = `
        <div class="quiz-question-single">
            <h4>${q.q}</h4>
            ${q.options.map((opt, idx) => `
                <div class="quiz-option" data-option="${idx}">
                    <input type="radio" name="current-question" value="${idx}" id="opt-${idx}">
                    <label for="opt-${idx}">${opt}</label>
                </div>
            `).join('')}
        </div>
    `;
    
    // Pre-select if already answered
    if (state.userAnswers[state.currentIndex] !== null) {
        const prevSelected = container.querySelector(`.quiz-option[data-option="${state.userAnswers[state.currentIndex]}"]`);
        if (prevSelected) {
            prevSelected.classList.add('selected');
            prevSelected.querySelector('input').checked = true;
        }
    }

    // Add click handlers to options
    container.querySelectorAll('.quiz-option').forEach(opt => {
        opt.onclick = () => {
            container.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            opt.querySelector('input').checked = true;
            state.userAnswers[state.currentIndex] = parseInt(opt.dataset.option); // Store selection immediately
        };
    });
}

function handleQuizNext() {
    const state = currentQuizState;
    const selectedValue = state.userAnswers[state.currentIndex];
    
    if (selectedValue === null) {
        alert('Please select an answer before proceeding.');
        return;
    }
    
    if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        renderQuizQuestion();
        document.getElementById('quiz-next-btn').textContent = "Next Question"; // Ensure text is correct
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const state = currentQuizState;
    let correct = 0;
    
    const reviewHTML = state.questions.map((q, idx) => {
        const userAns = state.userAnswers[idx];
        const isCorrect = userAns === q.answer;
        if (isCorrect) correct++;
        
        const userAnswerText = userAns !== null ? q.options[userAns] : 'Not answered';

        return `
            <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <strong>Q${idx + 1}:</strong> ${q.q}<br>
                <strong>Your answer:</strong> ${userAnswerText}<br>
                ${!isCorrect ? `<strong>Correct answer:</strong> ${q.options[q.answer]}<br>` : ''}
                ${!isCorrect ? `<em>Hint:</em> ${q.hint}` : ''}
            </div>
        `;
    }).join('');
    
    const passed = correct >= 4;
    
    document.getElementById('quiz-question-display').innerHTML = '';
    document.getElementById('quiz-navigation').classList.add('hidden'); // Hide next button
    
    const resultsDiv = document.getElementById('quiz-results');
    resultsDiv.classList.remove('hidden');
    
    document.getElementById('quiz-score').innerHTML = `
        <strong class="${passed ? 'result-message success' : 'result-message fail'}">
            You scored ${correct} out of ${state.questions.length}. ${passed ? 'You passed!' : 'You need 4 correct to pass.'}
        </strong>
    `;
    
    document.getElementById('quiz-review').innerHTML = reviewHTML;
    
    document.getElementById('retry-quiz-btn').classList.add('hidden');
    document.getElementById('finish-quiz-btn').classList.add('hidden');

    if (!passed) {
        document.getElementById('quiz-hints').innerHTML = `
            <h4><i class="fas fa-lightbulb"></i> Study Tips:</h4>
            <p>Review the lesson material carefully, especially sections mentioned in the hints above. Focus on understanding core concepts before retrying.</p>
        `;
        document.getElementById('retry-quiz-btn').classList.remove('hidden');
        document.getElementById('retry-quiz-btn').onclick = () => startStepByStepQuiz(state.lessonId);
    } else {
        document.getElementById('quiz-hints').innerHTML = '';
        userProgress.lessons[state.lessonId].quizPassed = true;
        userProgress.lessons[state.lessonId].completed = true;
        saveProgress();
        showLessonCompletedNotification(state.lessonId); // NEW notification
        
        document.getElementById('finish-quiz-btn').classList.remove('hidden');
        document.getElementById('finish-quiz-btn').onclick = () => showSection('lessons');
    }
}

// NEW: Lesson Completed Notification
function showLessonCompletedNotification(lessonId) {
    const notification = document.getElementById('lesson-completed-notification');
    const message = document.getElementById('completed-message');
    message.textContent = `Lesson ${lessonId} Completed!`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2500); // Notification disappears after 2.5 seconds
}


// --- FLASHCARDS --------------------------------------------------------------

function renderFlashcards() {
    const grid = document.getElementById('flashcard-grid');
    if (!grid) return;
    grid.innerHTML = '';

    FLASHCARDS.forEach(cardInfo => {
        const wrapper = document.createElement('div');
        wrapper.className = 'flashcard-wrapper';

        const card = document.createElement('div');
        card.className = 'flashcard';
        card.innerHTML = `
            <div class="flashcard-front section-card">${cardInfo.term}</div>
            <div class="flashcard-back section-card">
                <p><strong>Definition:</strong></p>
                <p>${cardInfo.definition}</p>
            </div>
        `;
        card.addEventListener('click', () => card.classList.toggle('flipped'));

        wrapper.appendChild(card);
        grid.appendChild(wrapper);
    });
}

// --- LIBRARY -----------------------------------------------------------------

function renderLibrary() {
    const container = document.getElementById('library-content');
    if (!container) return;
    container.innerHTML = '';

    LIBRARY_ENTRIES.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'library-item section-card';
        item.innerHTML = `
            <h3>${entry.title}</h3>
            <p>${entry.content}</p>
        `;
        container.appendChild(item);
    });
}

// --- CERTIFICATE -------------------------------------------------------------

function checkCertificateEligibility() {
    const total = LESSONS.length;
    const completed = LESSONS.filter(lesson => userProgress.lessons[lesson.id]?.quizPassed).length;

    const message = document.getElementById('certificate-message');
    const img = document.getElementById('certificate-display');
    const button = document.getElementById('download-certificate');

    if (completed === total) {
        message.textContent = "Congratulations! You have completed the AleoLearn course and earned your certificate.";
        img.classList.remove('hidden');
        button.classList.remove('hidden');
        button.onclick = () =>
            alert("Certificate download simulated. Here you would trigger a real download of certificate1.png.");
        triggerConfetti(); // NEW: Confetti effect!
    } else {
        message.textContent = `You need to pass ${total - completed} more quizzes to earn your AleoLearn Certification.`;
        img.classList.add('hidden');
        button.classList.add('hidden');
    }
}

// NEW: Confetti function
function triggerConfetti() {
    const confettiColors = ['#ffc107', '#28a745', '#0d6efd', '#dc3545', '#6f42c1'];
    for (let i = 0; i < 50; i++) { // Generate 50 confetti pieces
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.setProperty('--confetti-color', confettiColors[Math.floor(Math.random() * confettiColors.length)]);
        confetti.style.setProperty('--x', `${Math.random() * 200 - 100}vw`); // Random horizontal movement
        confetti.style.setProperty('--fall-duration', `${Math.random() * 3 + 2}s`); // Random duration 2-5s
        confetti.style.setProperty('--fall-delay', `${Math.random() * 5}s`); // Random delay 0-5s
        document.body.appendChild(confetti);

        // Remove confetti after animation to prevent memory leaks
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}


// --- ZK SIMULATOR MODAL ------------------------------------------------------

function openZkSimulator() {
    document.getElementById('zk-simulator-modal').classList.remove('hidden');
    resetSimulator();
}

function closeZkSimulator() {
    document.getElementById('zk-simulator-modal').classList.add('hidden');
}

function runSimulator() {
    document.getElementById('sim-start-btn').classList.add('hidden');
    document.getElementById('sim-reset-btn').classList.remove('hidden');
    
    const steps = ['step-1', 'step-2', 'step-3', 'step-4'];
    let currentStepIndex = 0;

    function animateStep() {
        if (currentStepIndex > 0) {
            document.getElementById(steps[currentStepIndex - 1]).classList.remove('active-step');
        }
        if (currentStepIndex < steps.length) {
            document.getElementById(steps[currentStepIndex]).classList.add('active-step');
            currentStepIndex++;
            setTimeout(animateStep, 1500); // Advance to next step after 1.5 seconds
        } else {
            // All steps shown
        }
    }
    
    // Start with the first step active, then animate the rest
    document.getElementById(steps[0]).classList.add('active-step');
    currentStepIndex = 1;
    setTimeout(animateStep, 1500); // Start animation after initial step is shown
}

function resetSimulator() {
    document.getElementById('sim-start-btn').classList.remove('hidden');
    document.getElementById('sim-reset-btn').classList.add('hidden');
    
    const steps = ['step-1', 'step-2', 'step-3', 'step-4'];
    steps.forEach((stepId, index) => {
        const step = document.getElementById(stepId);
        step.classList.remove('active-step');
        if (index === 0) { // Only the first step is initially active/visible
            step.classList.add('active-step');
        }
    });
}
const difficulty = ['Beginner', 'Intermediate', 'Beginner', 'Intermediate', 'Advanced', 'Advanced'][index];
const tagColor = index < 2 ? '#28a745' : index < 4 ? '#ffc107' : '#dc3545';

card.innerHTML = `
    <p><strong>Lesson ${lesson.id}</strong></p>
    <h3>${lesson.title}</h3>
    <div style="font-size:0.8em; margin:10px 0;">
        <span style="color:white; background:${tagColor}; padding:3px 8px; border-radius:4px;">
            ${difficulty}
        </span>
    </div>
    <div class="lesson-status">
        <span>${statusText}</span>
        ${icon}
    </div>
`;