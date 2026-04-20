// ====================== DATA ======================

const TOPICS = [
  { id: 0, lec: "L1", title: "AI Foundations & Intelligence", color: "#7c3aed" },
  { id: 1, lec: "L2", title: "Agents, PEAS & Robots", color: "#06b6d4" },
  { id: 2, lec: "L3", title: "Search in AI", color: "#f59e0b" },
  { id: 3, lec: "L4", title: "Advanced Search", color: "#10b981" },
  { id: 4, lec: "Game", title: "Game Playing & Minimax", color: "#ef4444" },
  { id: 5, lec: "L5", title: "Knowledge & PL", color: "#ec4899" },
  { id: 6, lec: "L6", title: "Predicate Calculus & FOL", color: "#f97316" },
  { id: 7, lec: "L7", title: "Fuzzy Logic", color: "#8b5cf6" },
  { id: 8, lec: "ML", title: "KNN & Linear Regression", color: "#14b8a6" },
];

const NOTES = [
  {
    id: 0, title: "AI Foundations & Intelligence",
    subtitle: "Lecture 1 · Dr. Oliver Kornyo",
    concepts: [
      { title: "What is Artificial?", body: `"Artificial" = contrived by art rather than nature; NOT arising from natural growth and NOT characterised by vital processes.` },
      { title: "Definitions of Intelligence", body: `Intelligence is simultaneously: the faculty of understanding, the capacity to know/apprehend, ability to use knowledge in new situations, ability to learn, plan, use symbols, think abstractly, and work toward a goal.
<br><br><strong>Key exam definition:</strong> "A system's comparative level of performance in reaching its objectives, implying having experiences where the system learned which actions best let it reach its objectives."
<br><br><strong>Core definition:</strong> The ability to comprehend, understand, and profit from experience.` },
      { title: "4 Categories of AI Approaches <span class='tricky-tag'>TRICKY</span>", body: `
<ul>
<li><strong>Act Humanly</strong> — Turing Test approach. Tests if a machine can fool a human interrogator.</li>
<li><strong>Think Humanly</strong> — Cognitive modelling. Requires scientific theories of brain internals. Validated by neurological data.</li>
<li><strong>Think Rationally</strong> — Laws of thought. Mathematical/philosophical. Normative (prescriptive), not descriptive. Problem: not all intelligent behaviour involves logical deliberation.</li>
<li><strong>Act Rationally</strong> — Rational agent approach. "Right thing" = maximises goal achievement given available info. Rational behaviour does NOT necessarily involve thinking (e.g., blinking reflex).</li>
</ul>` },
      { title: "Turing Test Features <span class='tricky-tag'>EXAM FAV</span>", body: `
<ul>
<li>Gives an <em>objective</em> notion of intelligence</li>
<li>Prevents distraction by unanswerable questions (e.g., "is the machine conscious?")</li>
<li>Eliminates bias toward living organisms — interrogator focuses solely on answer content</li>
</ul>` },
      { title: "Foundations of AI", body: `
<ul>
<li><strong>Philosophy</strong> — Logic, methods of reasoning, mind as physical system, foundations of learning</li>
<li><strong>Mathematics</strong> — Formal proof, algorithms, decidability, tractability, probability</li>
<li><strong>Psychology</strong> — Adaptation, perception, motor control</li>
<li><strong>Economics</strong> — Formal theory of rational decisions</li>
<li><strong>Linguistics</strong> — Knowledge representation, grammar</li>
<li><strong>Neuroscience</strong> — Physical substrate for mental activity</li>
</ul>` },
      { title: "Intelligent System Definition", body: `An IS is a system that: (1) exists, (2) learns from its environment during its existence, (3) continually acts mentally and externally to reach objectives more often than pure chance, (4) consumes and uses energy for internal processes.
<br><br>An IS is fundamentally a <strong>stimulus-response system</strong>. Stimulus → brain extracts info → situation → selects response rule → acts.` },
      { title: "Essential Abilities for Intelligence <span class='tricky-tag'>TRICKY</span>", body: `
<ul>
<li>Respond to situations <strong>flexibly</strong></li>
<li>Take advantage of <strong>fortuitous circumstances</strong></li>
<li>Make sense of <strong>ambiguous or contradictory</strong> messages</li>
<li>Recognise <strong>relative importance</strong> of elements</li>
<li>Find <strong>similarities</strong> despite differences</li>
<li>Draw <strong>distinctions</strong> despite similarities</li>
<li>Synthesise <strong>new concepts</strong> from old ones</li>
<li>Come up with <strong>novel ideas</strong></li>
</ul>` },
    ]
  },
  {
    id: 1, title: "Agents, PEAS & Robots",
    subtitle: "Lecture 2 · Dr. Oliver Kornyo",
    concepts: [
      { title: "Agent Definition", body: `An agent is anything that <strong>perceives</strong> its environment through <strong>sensors</strong> and <strong>acts</strong> upon that environment through <strong>actuators</strong>. Agent = Architecture + Program.
<br><br>Agent function: <code>f : P* → A</code> (maps percept sequence to action)` },
      { title: "PEAS Framework <span class='tricky-tag'>EXAM FAV</span>", body: `
<ul>
<li><strong>P</strong>erformance Measure — safety, destination, profit, comfort</li>
<li><strong>E</strong>nvironment — streets, freeways, traffic, weather, buildings</li>
<li><strong>A</strong>ctuators — steering, accelerator, brake, horns</li>
<li><strong>S</strong>ensors — video, gauges, engine sensors, thermostats</li>
</ul>
<em>Example: Medical Diagnosis System — PM: healthy patient, correct Rx, min cost | Env: patient, hospital | Act: screen display | Sensors: keyboard</em>` },
      { title: "Environment Types <span class='tricky-tag'>TRICKY</span>", body: `
<ul>
<li><strong>Fully/Partially Observable</strong> — sensors give complete access?</li>
<li><strong>Deterministic/Stochastic</strong> — next state fully determined? (if only other agents cause uncertainty → strategic)</li>
<li><strong>Episodic/Sequential</strong> — each episode independent?</li>
<li><strong>Static/Dynamic</strong> — unchanged while deliberating? Semi-dynamic: world unchanged but performance score changes</li>
<li><strong>Discrete/Continuous</strong> — limited distinct percepts/actions?</li>
<li><strong>Single/Multi-agent</strong> — operating alone?</li>
</ul>` },
      { title: "5 Agent Types <span class='tricky-tag'>TRICKY</span>", body: `
<ul>
<li><strong>Simple Reflex</strong> — if condition → action. Only works in fully observable environments.</li>
<li><strong>Reflex with State</strong> — handles partially observable. Maintains internal model of world.</li>
<li><strong>Goal-based</strong> — stores desirable situations; only distinguishes goal vs non-goal states.</li>
<li><strong>Utility-based</strong> — measures how desirable a state is via utility function; maps state → utility value.</li>
<li><strong>Learning Agent</strong> — operates in unknown environments, becomes more competent over time.</li>
</ul>` },
      { title: "Robot Degrees of Freedom <span class='tricky-tag'>EXAM FAV</span>", body: `DOF = number of independent movements relative to a coordinate frame. Unconstrained object has 6 DOF (3 translations + 3 rotations).
<br><br><strong>Human arm has 7 DOF:</strong>
<ul>
<li>Shoulder: Pitch (up-down), Yaw (left-right), Roll (rotational) = 3</li>
<li>Elbow: Pitch only = 1</li>
<li>Wrist: Pitch, Yaw, Roll = 3</li>
<li>Total = 7</li>
</ul>` },
      { title: "Accuracy vs Repeatability <span class='tricky-tag'>TRICKY</span>", body: `
<strong>Accuracy</strong> = ability to position at a <em>desired</em> position. Difference between actual and commanded location.
<br><br><strong>Repeatability</strong> = ability to return to a <em>previously taught</em> point. Statistical term. Variation in actual location when repeatedly commanded to same location.
<br><br><strong>Resolution</strong> = minimum distance the tool centre point can move. Smallest possible movement.
<br><br><em>Important: Repeatability and resolution are usually BETTER than accuracy.</em>` },
      { title: "Robot Programming Methods", body: `
<strong>Off-line Programming</strong> — done on computer with simulated replica. Programming time ≠ robot work time. Errors correctable before execution.
<br><br><strong>On-line (Lead-through) Programming</strong> — programmer moves robot through desired path, recorded in memory via teach pendant. Limited to point-to-point motion. Paths cannot be tested before execution.
<br><br><strong>Two control modes:</strong> Teach Mode (creating/storing paths) and Run Mode (executing stored program).` },
    ]
  },
  {
    id: 2, title: "Search in AI",
    subtitle: "Lecture 3 · Dr. Oliver Kornyo",
    concepts: [
      { title: "Search Problem Components", body: `Every search problem has: <strong>Initial state</strong>, <strong>Goal state</strong> (or goal test), <strong>Permissible operators</strong> (actions), <strong>Path cost</strong>.
<br><br><strong>State</strong> = one status of the problem capturing all relevant info.
<br><strong>State space</strong> = all possible states (also called search space).` },
      { title: "Types of Search Problems <span class='tricky-tag'>TRICKY</span>", body: `
<ul>
<li><strong>Single-state</strong> — deterministic, fully observable. Solution is a sequence.</li>
<li><strong>Conformant</strong> — non-observable. Agent may not know where it is. Solution is a sequence.</li>
<li><strong>Contingency</strong> — non-deterministic / partially observable. Solution is a tree (contingent plan).</li>
<li><strong>Exploration</strong> — state space is unknown.</li>
</ul>` },
      { title: "Search Evaluation Criteria <span class='tricky-tag'>EXAM FAV</span>", body: `
<ul>
<li><strong>Completeness</strong> — guaranteed to find a solution if one exists?</li>
<li><strong>Time complexity</strong> — time to generate/expand nodes</li>
<li><strong>Space complexity</strong> — memory needed</li>
<li><strong>Optimality</strong> — finds the BEST solution first?</li>
</ul>
<br>Measured in: <strong>b</strong> (max branching factor), <strong>d</strong> (depth of solution), <strong>m</strong> (max depth of state space)` },
      { title: "BFS Properties <span class='tricky-tag'>TRICKY</span>", body: `
<ul>
<li><strong>Complete?</strong> Yes (if b is finite)</li>
<li><strong>Time?</strong> O(b<sup>d+1</sup>)</li>
<li><strong>Space?</strong> O(b<sup>d+1</sup>) — keeps EVERY node in memory</li>
<li><strong>Optimal?</strong> Yes (if cost = 1 per step)</li>
</ul>
Fringe is a QUEUE (FIFO). Explores: A B C D E F G (level by level).` },
      { title: "DFS Properties <span class='tricky-tag'>TRICKY</span>", body: `
<ul>
<li><strong>Complete?</strong> No — if b finite but m infinite (needs modification to avoid repeated states)</li>
<li><strong>Time?</strong> O(b<sup>m</sup>) — terrible if m >> d</li>
<li><strong>Space?</strong> O(bm) — LINEAR space (only stores b×m nodes)</li>
<li><strong>Optimal?</strong> No</li>
</ul>
Fringe is a STACK (LIFO). Explores: A B D H I E J K C F L M G N O (deepest first).` },
      { title: "Uninformed vs Informed Search", body: `
<strong>Uninformed (Blind) Search</strong> — can only distinguish goal from non-goal. No knowledge of distance to goal. Types: DFS, BFS, Uniform Cost, Depth-Limited, Iterative Deepening, Bi-directional.
<br><br><strong>Informed (Heuristic) Search</strong> — uses estimates of distance to goal. Types: Greedy/Best-First, A* Search.` },
    ]
  },
  {
    id: 3, title: "Advanced Search",
    subtitle: "Lecture 4 · Dr. Oliver Kornyo",
    concepts: [
      { title: "Uniform Cost Search", body: `Expands node with <strong>smallest path cost g(n)</strong>. BFS is a special case where g(n) = depth(n). Complete and Optimal. Path cost function g() assigns cost to each path.` },
      { title: "Iterative Deepening Search (IDS)", body: `Combines benefits of BFS and DFS. Performs DFS with increasing depth limit.
<br><br><ul>
<li><strong>Complete?</strong> Yes</li>
<li><strong>Optimal?</strong> Yes</li>
<li><strong>Space?</strong> Linear O(bd)</li>
<li>Seems costly but most nodes are at bottom level — upper levels are few</li>
</ul>` },
      { title: "Bi-Directional Search", body: `Searches forward from initial state AND backward from goal simultaneously. Stops when they meet in the middle.
<br><br><strong>Complexity: O(b<sup>d/2</sup>)</strong> — each direction only goes halfway.
<br><br><strong>Issues:</strong> Must generate predecessors for backward search (can be impossible). Hard with many goal states. Must efficiently check if two searches have met. Nodes of at least one search must be retained in memory.` },
      { title: "Heuristic Search & h(n) <span class='tricky-tag'>TRICKY</span>", body: `
<strong>Heuristic function h(n)</strong> = estimate of distance from node n to goal. Lower h(n) = more promising/desirable node.
<br><br><strong>Evaluation function f(n):</strong>
<div class="formula">f(n) = g(n) → Uniform Cost Search
f(n) = h(n) → Greedy Search
f(n) = h(n) + g(n) → A* Search</div>` },
      { title: "Greedy Search Properties <span class='tricky-tag'>TRICKY</span>", body: `
<ul>
<li><strong>Optimal?</strong> No — prefers one path all the way to goal</li>
<li><strong>Complete?</strong> Only if repeated states can be removed; can get stuck in loops</li>
<li><strong>Time:</strong> O(b<sup>m</sup>)</li>
<li><strong>Space:</strong> O(b<sup>m</sup>) — keeps all nodes in memory</li>
<li>A good heuristic can give dramatic improvement</li>
</ul>` },
      { title: "A* Search", body: `Uses f(n) = h(n) + g(n). Tries to expand nodes on the least-cost path to goal.
<br><br><ul>
<li><strong>Complete?</strong> Yes</li>
<li><strong>Optimal?</strong> Yes</li>
<li><strong>Optimally Efficient:</strong> No other algorithm using h(n) is guaranteed to expand fewer states.</li>
</ul>` },
      { title: "Constraint Satisfaction Problems (CSP)", body: `States defined by values of variables; values must obey constraints. E.g., Cats & Mice: number of mice ≥ number of cats, OR number of mice = 0. CSPs have special structure; dedicated algorithms perform much better than general search.` },
    ]
  },
  {
    id: 4, title: "Game Playing & Minimax",
    subtitle: "Adversarial Search · Dr. Oliver Kornyo",
    concepts: [
      { title: "Why Games for AI?", body: `Games allow experimenting with easier versions of real-world situations. Chess has ~10<sup>40</sup> legal positions. Search space too hard to consider exhaustively. Opponent introduces uncertainty. Finite set of moves. Easy to represent.` },
      { title: "Zero-Sum Games <span class='tricky-tag'>TRICKY</span>", body: `Two-player, zero-sum: as Player 1 gains strength, Player 2 loses strength. The sum of strengths is always 0. Focus: adversarial games where one player wins at the other's expense.` },
      { title: "Minimax Algorithm <span class='tricky-tag'>EXAM FAV</span>", body: `
Search tree to the end → assign utility to terminal nodes → find best move:
<ul>
<li>MAX makes move that <strong>maximises</strong> MAX's utility</li>
<li>MIN makes move that <strong>minimises</strong> MAX's utility</li>
</ul>
<br><strong>Properties:</strong>
<ul>
<li>Complete if tree is finite</li>
<li>Optimal if playing against opponent with same strategy</li>
<li>Time: O(b<sup>m</sup>), Space: O(bm)</li>
</ul>` },
      { title: "Static Board Evaluator (SBE)", body: `Can't look to end of game → look ahead ply moves → evaluate with SBE.
<br><br>Example for Tic-Tac-Toe: SBE = #unblocked lines with X's − #unblocked lines with O's
<br><br>For chess: SBE(s) = w₁f₁(s) + w₂f₂(s) + ... + wₙfₙ(s) (linear weighted sum)
<br><br>Chess ply depth: 4 = novice, 8 = master, 12 = grandmaster` },
      { title: "Alpha-Beta Pruning <span class='tricky-tag'>TRICKY</span>", body: `Simplifies search space WITHOUT eliminating optimality.
<br><br><ul>
<li>α = lower bound (updated at MAX levels)</li>
<li>β = upper bound (updated at MIN levels)</li>
<li>Good move ordering improves effectiveness</li>
<li><strong>With perfect ordering: O(b<sup>m/2</sup>)</strong></li>
<li>Pruning does NOT affect final result</li>
</ul>
<br><strong>Bad case:</strong> worst moves encountered first. <strong>Good case:</strong> good moves ordered first → more pruning.` },
      { title: "Horizon Effect <span class='tricky-tag'>TRICKY</span>", body: `
<ul>
<li>Inevitable losses are postponed beyond the "horizon"</li>
<li>Unachievable goals appear achievable</li>
<li>Short-term gains mask unavoidable consequences (traps)</li>
</ul>
<br><strong>Solutions:</strong>
<ul>
<li><strong>Feedover</strong> — don't cut off at non-quiescent positions; keep searching dynamic situations</li>
<li><strong>Secondary Search</strong> — search further down selected path to confirm</li>
<li><strong>Progressive Deepening</strong> — search 1 ply, then 2, etc. (like IDS)</li>
</ul>` },
      { title: "Nondeterministic Games", body: `E.g., backgammon with dice rolls. Use ExpectMinimax algorithm. Add chance nodes in addition to MIN and MAX nodes.
<br><br>For chance nodes: ExpectMinimaxValue(n) = Σ P(s) × ExpectMinimaxValue(s)` },
    ]
  },
  {
    id: 5, title: "Knowledge & Propositional Logic",
    subtitle: "Lecture 5 · Dr. Oliver Kornyo",
    concepts: [
      { title: "Why Knowledge & Reasoning?", body: `Agents need knowledge to: cope with complex environments, deal with partially observable environments, handle complicated tasks (NLP), and provide flexibility in problem solving. Agents need a <strong>Knowledge Base</strong> + <strong>Inference Engine</strong>.` },
      { title: "Knowledge Representation Requirements <span class='tricky-tag'>TRICKY</span>", body: `A KR scheme must be: Expressive, Precise (unambiguous), Regular (clear mapping), Adaptable (add/delete info), Suitable for reasoning, Computationally attractive, Support Meta-level reasoning, Handle Qualitative knowledge.` },
      { title: "Physical Symbol Hypothesis", body: `Necessary and sufficient for intelligent behaviour:
<ul>
<li>Symbolic patterns represent significant aspects of a problem domain</li>
<li>Operations/processes on patterns generate new patterns (potential solutions)</li>
<li>Search selects a solution from among possibilities</li>
</ul>
Foundation of all Symbolic AI.` },
      { title: "Propositional Logic Syntax", body: `Basic symbols: logical constants (T/F), proposition symbols (P, Q, R), connectives (∧, ∨, ¬, →, ↔).
<br><br>Well Formed Formula (WFF) = grammatically correct sentence.
<br><br>A <strong>literal</strong> is an atomic sentence: either positive P or negative ¬P.` },
      { title: "Truth Values <span class='tricky-tag'>EXAM FAV</span>", body: `
<ul>
<li>P ∧ Q: true iff BOTH are true</li>
<li>P ∨ Q: true iff at least ONE is true</li>
<li>¬P: true iff P is false</li>
<li>P → Q: FALSE only when P is TRUE and Q is FALSE. True in all other cases!</li>
<li>P ↔ Q: true iff both same truth value</li>
</ul>` },
      { title: "Implication Truth (Counter-intuitive) <span class='tricky-tag'>TRICKY</span>", body: `P → Q: "He studied hard implies he passed"
<br><br><ul>
<li>T→T: True (studied, passed ✓)</li>
<li>F→T: <strong>True</strong> (didn't study, still passed — implication holds!)</li>
<li>T→F: <strong>False</strong> (studied but failed — breaks implication)</li>
<li>F→F: <strong>True</strong> (didn't study, didn't pass — implication holds!)</li>
</ul>
<em>The key: an implication is only FALSE when the antecedent is TRUE and consequent is FALSE.</em>` },
      { title: "Wumpus World", body: `Goal: find gold without being eaten (Wumpus) or falling (Pit).
<br><ul>
<li>Adjacent to wumpus → Smelly</li>
<li>Adjacent to pit → Breezy</li>
<li>Same square as gold → Glitter</li>
</ul>
<br>Partially observable. Uses PL to represent: ¬P₁,₁ (no pit at 1,1), B₂,₁↔(P₁,₁∨P₂,₂∨P₃,₁)` },
    ]
  },
  {
    id: 6, title: "Predicate Calculus & FOL",
    subtitle: "Lecture 6 · Dr. Oliver Kornyo",
    concepts: [
      { title: "Logical Equivalences <span class='tricky-tag'>EXAM FAV</span>", body: `
Key equivalences:
<div class="formula">(α→β) ≡ (¬β→¬α)  — contraposition
(α→β) ≡ (¬α∨β)  — implication elimination
¬(α∧β) ≡ (¬α∨¬β)  — de Morgan
¬(α∨β) ≡ (¬α∧¬β)  — de Morgan</div>` },
      { title: "Validity, Satisfiability <span class='tricky-tag'>TRICKY</span>", body: `
<strong>Valid</strong> = true in ALL models (tautology). Example: P∨¬P, P→P.
<br><strong>Satisfiable</strong> = true in SOME models. Example: P∨Q.
<br><strong>Unsatisfiable</strong> = true in NO models. Example: P∧¬P.
<br><br><em>KB ⊨ α  iff  (KB∧¬α) is unsatisfiable</em> — proof by contradiction (reductio ad absurdum).` },
      { title: "Modus Ponens & And-Elimination <span class='tricky-tag'>EXAM FAV</span>", body: `
<strong>Modus Ponens:</strong>
<div class="formula">α→β, α
——————
   β</div>
If (Hungry∧FoodAvailable)→Eat and (Hungry∧FoodAvailable) is true → infer Eat.
<br><br><strong>And-Elimination:</strong>
<div class="formula">α∧β
———
 α</div>
From conjunction, infer any conjunct.` },
      { title: "Horn Clauses & AND-OR Graphs", body: `A Horn Clause is a disjunction (∨) of literals where <strong>at most one is positive</strong>.
<br>E.g.: P∨Q∨R∨S = ¬P∧¬Q∧¬R→S
<br><br>AND-OR graph: multiple links with an arc = conjunction (ALL must be proved). Without arc = disjunction (ANY can be proved).` },
      { title: "Forward vs Backward Chaining <span class='tricky-tag'>TRICKY</span>", body: `
<strong>Forward Chaining (FC)</strong> — data-driven. Starts with known data (initial state). Fire rules whose premises are satisfied until conclusion is reached. Complete.
<br><br><strong>Backward Chaining (BC)</strong> — goal-driven. Starts with a goal. Works backwards; to prove q, prove all premises of rules that conclude q. Must check for loops.` },
      { title: "Monotonicity", body: `If KB ⊨ α, then KB∧β ⊨ α. Additional information β CANNOT invalidate conclusions already inferred. Allows efficient proof by ignoring irrelevant propositions.` },
      { title: "FOL vs Propositional Logic <span class='tricky-tag'>TRICKY</span>", body: `PL limitation: cannot share properties across objects. "Wumpus is dead" and "Steve is dead" use completely different symbols — no indication "dead" is the same property.
<br><br>FOL assumes the world has <strong>Objects</strong> (people, numbers), <strong>Relations</strong> (red, bigger than, father of), <strong>Functions</strong> (father of, best friend).` },
      { title: "Quantifiers <span class='tricky-tag'>EXAM FAV</span>", body: `
<strong>Universal (∀):</strong> ∀x P(x) — true for ALL values of x.
<br>Example: ∀x Study(x,AI)→Smart(x) — everyone studying AI is smart.
<br><br><strong>Existential (∃):</strong> ∃x P(x) — true for SOME value of x.
<br>Example: ∃x Study(x,Laws)∧Smart(x) — someone studying law is smart.
<br><br><strong>Common mistake:</strong> Using ∧ with ∀ or → with ∃!
<br>∀x Study(x,AI)∧Smart(x) means "everyone studies AI AND everyone is smart" — WRONG.` },
      { title: "Quantifier Equivalences <span class='tricky-tag'>TRICKY</span>", body: `
<div class="formula">∀x ¬P  ≡  ¬∃x P
∀x P   ≡  ¬∃x ¬P
¬∀x P  ≡  ∃x ¬P
¬∀x ¬P ≡  ∃x P</div>
<strong>Order matters:</strong><br>
∀x ∃y Loves(x,y) = "everyone loves someone"<br>
∃y ∀x Loves(x,y) = "someone is loved by everyone"` },
    ]
  },
  {
    id: 7, title: "Fuzzy Logic",
    subtitle: "Lecture 7 · Dr. Oliver Kornyo",
    concepts: [
      { title: "Fuzzy Logic vs Bi-state Logic <span class='tricky-tag'>TRICKY</span>", body: `Bi-state logic: 0 or 1, black or white. Fuzzy logic: allows <strong>multi-state partial membership</strong> in a set (shades of gray). Robust to vague/imprecise/missing data and nonlinearity.` },
      { title: "Key Definitions <span class='tricky-tag'>EXAM FAV</span>", body: `
<ul>
<li><strong>IS (Intelligent System)</strong> — design approach incorporating human intelligence via architecture or processing algorithms</li>
<li><strong>ES (Expert System)</strong> — IS incorporating human expert knowledge about specific problems into inference rules. Needs well-defined problem.</li>
<li><strong>NN (Neural Network)</strong> — brain-inspired IS using nonlinear elements based on neurons. Cannot incorporate human expert knowledge directly (only via supervised training).</li>
<li><strong>FES (Fuzzy Expert System)</strong> — ES implemented in fuzzy logic. Incorporates human knowledge but CANNOT learn/adapt on the fly.</li>
<li><strong>NFS (Neuro-Fuzzy)</strong> — combines NN adaptability + FES human knowledge. Best of both.</li>
</ul>` },
      { title: "Fuzzy Membership Functions", body: `A membership function (MF) is a portion of a variable's universe of discourse designated for usefulness to the problem. Shape can be trapezoidal, triangular, sigmoidal, Gaussian, etc.
<br><br>Example: Redness MF — "Absent" (0–3), "Ambivalent" (2–7), "Strong" (6–10). A tomato with redness 7.8 → μAmbivalent=0.1, μStrong=0.9.` },
      { title: "Mamdani vs Sugeno <span class='tricky-tag'>TRICKY</span>", body: `
<strong>Mamdani</strong> — inputs AND outputs described via fuzzy membership continua.
<br><br><strong>Sugeno</strong> — inputs are fuzzy but outputs are mathematical functions of inputs. E.g.: "If x is A and y is B, then z = f(x,y)" where f is a polynomial.` },
      { title: "Fuzzy Inference Steps <span class='tricky-tag'>EXAM FAV</span>", body: `
<ol>
<li><strong>Fuzzify inputs</strong> — map physical measurements to linguistic fuzzy membership continua. Obtain antecedent values.</li>
<li><strong>Apply rules</strong> — apply antecedent values to rules → obtain consequent areas.</li>
<li><strong>Aggregate</strong> — collect all rules' consequent areas into one aggregate.</li>
<li><strong>Defuzzify</strong> — calculate single-valued output (the "best representative" point in aggregate).</li>
</ol>` },
      { title: "Applications of Fuzzy Logic", body: `
<ul>
<li>Control systems (ubiquitous in Japanese tech — toasters to automobiles)</li>
<li>Radar & Sonar target ID/classification</li>
<li>Oil debris / hydraulic machine condition assessment</li>
<li>Gait analysis stance detector</li>
<li>Pressure ulcer protocol assistant</li>
<li>Fuzzy hill muscle model</li>
</ul>` },
    ]
  },
  {
    id: 8, title: "KNN & Linear Regression",
    subtitle: "ML Lectures · Bonus Content",
    concepts: [
      { title: "KNN Overview <span class='tricky-tag'>TRICKY</span>", body: `K-Nearest Neighbors: non-parametric, instance-based, lazy learning algorithm. No training phase — stores all training data. Classifies by majority vote of K nearest neighbours. Works for both classification and regression.` },
      { title: "Distance Metrics <span class='tricky-tag'>EXAM FAV</span>", body: `
<div class="formula">Euclidean: d = √(Σ(x₁-x₂)²)  — most common, straight-line
Manhattan: d = Σ|x₁-x₂|  — city block, grid-like
Minkowski: d = (Σ|x₁-x₂|ᵖ)^(1/p)  — generalises both (p=2: Euclidean, p=1: Manhattan)</div>
<br>Euclidean: continuous features. Manhattan: high dimensions.` },
      { title: "Choosing K <span class='tricky-tag'>TRICKY</span>", body: `Small K → sensitive to noise, complex boundaries, high variance, low bias, risk overfitting.
<br>Large K → smooth boundaries, low variance, high bias, risk underfitting.
<br><br><ul>
<li>Use ODD K for binary classification (avoid ties)</li>
<li>Rule of thumb: K = √n</li>
<li>Use cross-validation to find best K</li>
</ul>` },
      { title: "Feature Scaling is Critical for KNN", body: `Without scaling, features with larger ranges dominate distance calculation. Must apply Min-Max scaling ([0,1]) or Standardisation (mean=0, std=1) before using KNN.` },
      { title: "Linear Regression Fundamentals", body: `Models relationship: y = mx + b (slope m, intercept b).
<br><br><strong>Cost function (MSE):</strong> J = (1/n)Σ(y_pred - y_actual)²
<br><br><strong>Gradient descent:</strong> iteratively update m and b using partial derivatives to minimize MSE.` },
      { title: "Evaluation Metrics <span class='tricky-tag'>EXAM FAV</span>", body: `
<div class="formula">Accuracy = Correct / Total
Precision = TP / (TP + FP)
Recall = TP / (TP + FN)
F1 = 2 × (P × R) / (P + R)
MSE = (1/n)Σ(y_pred - y_actual)²
R² = 1 - (SS_res / SS_tot)</div>` },
    ]
  },
];

// ====================== QUESTIONS ======================

const QUESTIONS = [
  // L1
  { topic: 0, lec:"L1", type:"MCQ", tricky:true, difficulty:"hard",
    q:"The Turing Test is primarily designed to:",
    opts:["Measure a computer's processing speed","Determine if a machine can exhibit intelligent behaviour indistinguishable from a human","Test whether AI can solve mathematical problems","Evaluate a robot's physical capabilities"],
    ans:1, exp:"<strong>The Turing Test</strong> measures performance of an allegedly intelligent machine against a human. It gives an objective notion of intelligence, prevents distraction by philosophical questions about consciousness, and eliminates bias toward living organisms." },
  { topic: 0, lec:"L1", type:"MCQ", tricky:true, difficulty:"hard",
    q:"In the 'Systems that act rationally' approach, rational behaviour is described as:",
    opts:["Always involving deep logical deliberation before acting","Acting to maximise goal achievement given available information, NOT necessarily involving thinking","Mimicking human behaviour exactly","Following strict logical rules at all times"],
    ans:1, exp:"<strong>Rational behaviour does NOT necessarily involve thinking.</strong> Blinking is cited as an example — it's a rational (protective) behaviour but is a reflex. Thinking, however, should serve rational action." },
  { topic: 0, lec:"L1", type:"MCQ", tricky:false, difficulty:"med",
    q:"Which foundation of AI contributed 'formal theory of rational decisions'?",
    opts:["Philosophy","Psychology","Economics","Neuroscience"],
    ans:2, exp:"<strong>Economics</strong> contributed the formal theory of rational decisions to AI foundations. Philosophy contributed logic/reasoning. Psychology contributed adaptation/perception." },
  { topic: 0, lec:"L1", type:"MCQ", tricky:true, difficulty:"hard",
    q:"The 'think rationally' approach is described as _____ rather than descriptive.",
    opts:["Prescriptive / Normative","Empirical","Probabilistic","Heuristic"],
    ans:0, exp:"The <strong>laws of thought approach</strong> (think rationally) is <strong>normative/prescriptive</strong> — it tells us what SHOULD be done, not just what IS done. This is a key distinction the lecturer emphasises." },
  { topic: 0, lec:"L1", type:"MCQ", tricky:true, difficulty:"hard",
    q:"An Intelligent System is fundamentally a:",
    opts:["Rule-based system","Stimulus-response system","Database lookup system","Goal-only system"],
    ans:1, exp:"An IS is fundamentally a <strong>stimulus-response system</strong>. The stimulus (communications through senses) is processed by the brain into a situation, then the IS selects a stored response rule to act upon." },
  { topic: 0, lec:"L1", type:"MCQ", tricky:false, difficulty:"easy",
    q:"The core definition of intelligence in the slides is:",
    opts:["Speed of computation","The ability to comprehend, understand and profit from experience","Mimicking human physical behaviour","Processing large amounts of data"],
    ans:1, exp:"The lecturer defines intelligence at its core as <strong>'the ability to comprehend, understand and profit from experience.'</strong>" },
  { topic: 0, lec:"L1", type:"MCQ", tricky:true, difficulty:"hard",
    q:"Which of these is NOT listed as an essential ability for intelligence?",
    opts:["Respond to situations flexibly","Take advantage of fortuitous circumstances","Process information at superhuman speed","Come up with novel ideas"],
    ans:2, exp:"<strong>Speed of processing is not listed.</strong> The 8 essential abilities focus on flexibility, opportunity exploitation, handling ambiguity, recognising importance, finding similarities/distinctions, synthesising concepts, and novel ideas. Speed is not intelligence." },
  { topic: 0, lec:"L1", type:"MCQ", tricky:true, difficulty:"hard",
    q:"AI is defined as both a process of _____ (scientists) and a process of _____ (engineers).",
    opts:["Building machines / Studying nature","Understanding intelligence by modelling it computationally / Utilising intelligence by modelling it computationally","Automating tasks / Creating consciousness","Testing algorithms / Deploying systems"],
    ans:1, exp:"Dual perspective: Scientists = <strong>understanding</strong> intelligence by attempting to model it computationally. Engineers = <strong>utilising</strong> intelligence by attempting to model it computationally. Both involve computational modelling." },

  // L2
  { topic: 1, lec:"L2", type:"MCQ", tricky:true, difficulty:"hard",
    q:"What is the formal notation for an agent function?",
    opts:["f : A → P*","f : P* → A","f : S → A","f : A → S"],
    ans:1, exp:"<strong>f : P* → A</strong> — the agent function maps a percept sequence (P*) to an action (A). An agent is made up of its architecture and agent program, every agent program runs on a physical agent structure to produce this function." },
  { topic: 1, lec:"L2", type:"MCQ", tricky:true, difficulty:"hard",
    q:"In the PEAS framework for an automated car, which category does 'steering' belong to?",
    opts:["Performance Measure","Environment","Actuators","Sensors"],
    ans:2, exp:"<strong>Actuators</strong> are instruments with which an agent takes action on its environment. For an automated car: steering, accelerator, brake, horns are actuators. Sensors (video, gauges) perceive the environment." },
  { topic: 1, lec:"L2", type:"MCQ", tricky:true, difficulty:"hard",
    q:"An environment where the environment itself doesn't change but the agent's performance SCORE changes while deliberating is called:",
    opts:["Dynamic","Semi-dynamic","Fully observable","Stochastic"],
    ans:1, exp:"<strong>Semi-dynamic</strong> — the environment itself is unchanged (no physical changes) but the performance score changes with passage of time. This is a subtle but important distinction that often appears in exams." },
  { topic: 1, lec:"L2", type:"MCQ", tricky:true, difficulty:"hard",
    q:"A goal-based agent differs from a utility-based agent because:",
    opts:["Goal-based agents can learn; utility-based cannot","Goal-based only distinguishes goal vs non-goal; utility-based measures HOW DESIRABLE a state is","Utility-based agents don't have goals","Goal-based agents are faster"],
    ans:1, exp:"<strong>Goal-based agents</strong> only distinguish between goal and non-goal states (binary). <strong>Utility-based agents</strong> use a utility function that maps a state to a measure of its desirability — a continuous/gradual measure of how good a state is." },
  { topic: 1, lec:"L2", type:"MCQ", tricky:false, difficulty:"med",
    q:"A human arm has how many degrees of freedom?",
    opts:["3","5","6","7"],
    ans:3, exp:"<strong>7 DOF:</strong> Shoulder (Pitch+Yaw+Roll = 3) + Elbow (Pitch = 1) + Wrist (Pitch+Yaw+Roll = 3) = 7. The extra DOF give versatility for complex positioning tasks." },
  { topic: 1, lec:"L2", type:"MCQ", tricky:true, difficulty:"hard",
    q:"Which statement about Accuracy and Repeatability is TRUE?",
    opts:["Accuracy is always better than repeatability","Repeatability and resolution are usually BETTER than accuracy","Accuracy depends only on software, not mechanics","Repeatability refers to first-time positioning"],
    ans:1, exp:"<strong>Repeatability and resolution of most robots are BETTER than their accuracy.</strong> Accuracy is affected by backlash in joints, bending of links, control model approximations, temperature, and manufacturing tolerances." },
  { topic: 1, lec:"L2", type:"MCQ", tricky:true, difficulty:"hard",
    q:"Hysteresis error is:",
    opts:["Error caused by temperature change","Deviation between actual and commanded position caused by elastic forces in the motion system","Error caused by programming mistakes","Error due to sensor noise"],
    ans:1, exp:"<strong>Hysteresis error</strong> = deviation between actual and commanded position caused by <strong>elastic forces</strong> in the motion system. Related to unidirectional repeatability (measured by approaching from one direction to ignore backlash effects)." },
  { topic: 1, lec:"L2", type:"MCQ", tricky:true, difficulty:"hard",
    q:"In online programming of robots, there is a limitation to _____ as opposed to _____:",
    opts:["Point-to-point motion / Continuous motion","Continuous motion / Point-to-point motion","Straight paths / Curved paths","Low speed / High speed"],
    ans:0, exp:"With a <strong>teach pendant (online programming)</strong>, there is largely a limitation to <strong>point-to-point motion</strong> (as opposed to continuous motion) because of the complexities in regulating geometric motions in space." },

  // L3
  { topic: 2, lec:"L3", type:"MCQ", tricky:false, difficulty:"easy",
    q:"BFS uses which data structure for its fringe?",
    opts:["Stack (LIFO)","Queue (FIFO)","Priority Queue","Hash Table"],
    ans:1, exp:"<strong>BFS uses a QUEUE (FIFO)</strong> — new successors are added at the END of the list. This ensures the shallowest unexpanded node is always expanded first." },
  { topic: 2, lec:"L3", type:"MCQ", tricky:true, difficulty:"hard",
    q:"DFS uses which data structure and what is its space complexity?",
    opts:["Queue; O(b^d)","Stack; O(bm)","Priority Queue; O(b^m)","Hash Table; O(1)"],
    ans:1, exp:"<strong>DFS uses a STACK (LIFO)</strong>, and has <strong>linear space complexity O(bm)</strong> — it only needs to store b×m nodes (one path from root to leaf, plus siblings of each node on the path). This is DFS's main advantage over BFS." },
  { topic: 2, lec:"L3", type:"MCQ", tricky:true, difficulty:"hard",
    q:"The BFS time and space complexity is:",
    opts:["O(b^m) time, O(b^m) space","O(b^d+1) time, O(b^d+1) space","O(bm) time, O(bm) space","O(b^d) time, O(b^d) space"],
    ans:1, exp:"BFS time = <strong>O(b^(d+1))</strong> because it expands d+1 levels. Space = <strong>O(b^(d+1))</strong> because it must keep every node in memory. At depth 12 with b=10, this is 10^12 nodes = 35 years and 111 terabytes!" },
  { topic: 2, lec:"L3", type:"MCQ", tricky:true, difficulty:"hard",
    q:"A node in a search tree contains which information?",
    opts:["Only the current state","Current state, parent node, operator applied, depth, and path cost","State and depth only","Action and goal test only"],
    ans:1, exp:"A node contains: <strong>(1) current state, (2) parent node, (3) operator applied to parent, (4) depth, (5) path cost</strong>. This is different from a state — states don't have parent/child or path cost." },
  { topic: 2, lec:"L3", type:"MCQ", tricky:true, difficulty:"hard",
    q:"In the Cats and Mice problem, which condition makes a move ILLEGAL?",
    opts:["Moving only one person at a time","Cats outnumbering mice on EITHER bank","Moving more than 3 people","The boat carrying only cats"],
    ans:1, exp:"A legal move is one where <strong>cats don't outnumber mice on BOTH sides</strong> of the river. The problem says 'if cats outnumber mice at any time, the cats eat mice' — so cats ≤ mice or mice = 0 on each bank." },
  { topic: 2, lec:"L3", type:"MCQ", tricky:false, difficulty:"med",
    q:"What does 'b' represent in search complexity notation?",
    opts:["Depth of solution","Maximum branching factor of the search tree","Number of goal states","Number of nodes expanded"],
    ans:1, exp:"In time/space complexity: <strong>b = maximum branching factor</strong>, d = depth of solution node from root, m = maximum depth of state space (can be ∞)." },

  // L4
  { topic: 3, lec:"L4", type:"MCQ", tricky:true, difficulty:"hard",
    q:"What is A* search's evaluation function?",
    opts:["f(n) = h(n)","f(n) = g(n)","f(n) = h(n) + g(n)","f(n) = h(n) × g(n)"],
    ans:2, exp:"<strong>A* uses f(n) = h(n) + g(n)</strong> where h(n) is the heuristic estimate to goal and g(n) is path cost from start. f(n) represents the estimated cost of the cheapest solution through n." },
  { topic: 3, lec:"L4", type:"MCQ", tricky:true, difficulty:"hard",
    q:"If f(n) = g(n) only, what kind of search is it?",
    opts:["A* Search","Greedy Search","Uniform Cost Search","Depth-First Search"],
    ans:2, exp:"<strong>f(n) = g(n) → Uniform Cost Search.</strong> BFS is a special case where g(n) = depth(n) (all step costs equal). This question appeared directly in the slides as a challenge question." },
  { topic: 3, lec:"L4", type:"MCQ", tricky:true, difficulty:"hard",
    q:"IDS (Iterative Deepening Search) is best described as combining:",
    opts:["A* and Greedy","BFS space efficiency and DFS time efficiency","BFS completeness/optimality and DFS linear space complexity","Greedy and Uniform Cost"],
    ans:2, exp:"IDS combines: BFS's <strong>completeness and optimality</strong> + DFS's <strong>linear space complexity</strong>. It runs DFS with increasing depth limits. Nodes near the top are expanded multiple times, but this is not a serious cost since most nodes are at the bottom level." },
  { topic: 3, lec:"L4", type:"MCQ", tricky:true, difficulty:"hard",
    q:"Bi-directional search has complexity:",
    opts:["O(b^m)","O(b^d)","O(b^(d/2))","O(bd)"],
    ans:2, exp:"<strong>Bi-directional search: O(b^(d/2))</strong> because each direction only goes halfway to the goal. However, at least one direction's nodes must be stored in memory, which can be impractical." },
  { topic: 3, lec:"L4", type:"MCQ", tricky:false, difficulty:"med",
    q:"DFS is NOT complete because:",
    opts:["It uses too much memory","It can loop infinitely if m is infinite and repeated states aren't checked","It always finds wrong solutions","It cannot handle large branching factors"],
    ans:1, exp:"<strong>DFS is not complete</strong> if b is finite but m (max depth) is infinite. The search can go down an infinite branch. Modification to avoid repeated states along the path makes it complete in finite spaces." },

  // GAME
  { topic: 4, lec:"Game", type:"MCQ", tricky:true, difficulty:"hard",
    q:"In a zero-sum game, as Player 1 gains strength:",
    opts:["Both players gain","Player 2 loses the same amount (sum always = 0)","Player 2 gains as well","The game ends"],
    ans:1, exp:"<strong>Zero-sum:</strong> as P1 gains, P2 loses by the same amount. The total utility is always 0 (or constant). Chess, checkers, tic-tac-toe are examples." },
  { topic: 4, lec:"Game", type:"MCQ", tricky:true, difficulty:"hard",
    q:"Alpha-beta pruning with PERFECT move ordering achieves time complexity of:",
    opts:["O(b^m)","O(b^(m/2))","O(b^m/2)","O(b/2)^m"],
    ans:1, exp:"With <strong>perfect ordering, alpha-beta achieves O(b^(m/2))</strong> — effectively doubling the search depth for the same computation. Pruning does NOT affect the final result; it only eliminates unnecessary exploration." },
  { topic: 4, lec:"Game", type:"MCQ", tricky:true, difficulty:"hard",
    q:"The Horizon Effect in game playing refers to:",
    opts:["Looking too many moves ahead","Inevitable losses being postponed beyond the search horizon, masking unavoidable consequences","The board edge causing issues","Time limits interrupting search"],
    ans:1, exp:"<strong>Horizon Effect:</strong> Inevitable losses are postponed just beyond the search depth (the 'horizon'). Unachievable goals appear achievable. Short-term gains mask unavoidable consequences (traps). Solutions: feedover, secondary search, progressive deepening." },
  { topic: 4, lec:"Game", type:"MCQ", tricky:false, difficulty:"med",
    q:"In Minimax, what is the role of the MIN player?",
    opts:["Maximises MIN's own utility","Minimises MAX's utility","Plays randomly","Cooperates with MAX"],
    ans:1, exp:"In Minimax, <strong>MIN makes the move that MINIMISES MAX's utility</strong>. The algorithm assumes the opponent plays optimally against you. MAX maximises, MIN minimises MAX's score." },
  { topic: 4, lec:"Game", type:"MCQ", tricky:true, difficulty:"hard",
    q:"Which SBE (Static Board Evaluator) type does deep blue use?",
    opts:["Type B (smart, slow, like humans)","Type A (fast, massive search, linear weighted sum)","Random evaluation","Neural network only"],
    ans:1, exp:"<strong>Type A systems</strong> use fast but simple SBEs with massive search depth. Deep Blue searches 200M positions/second, up to 40 ply. Type B (like humans) uses smart evaluation with less search. Type A has been more successful in computer chess." },
  { topic: 4, lec:"Game", type:"MCQ", tricky:true, difficulty:"hard",
    q:"For nondeterministic games (e.g., backgammon with dice), which algorithm is used?",
    opts:["Pure Minimax","Alpha-Beta","ExpectMinimax","Greedy Search"],
    ans:2, exp:"<strong>ExpectMinimax</strong> handles chance nodes. For chance nodes: ExpectMinimaxValue(n) = Σ P(s) × ExpectMinimaxValue(s). This accounts for the probability of each random outcome." },

  // L5
  { topic: 5, lec:"L5", type:"MCQ", tricky:true, difficulty:"hard",
    q:"P → Q is FALSE only when:",
    opts:["P is false and Q is true","P is true and Q is false","Both P and Q are false","Both P and Q are true"],
    ans:1, exp:"<strong>Implication (P→Q) is FALSE only when P is TRUE and Q is FALSE.</strong> All other combinations are TRUE. This is counter-intuitive: a false premise makes any implication true! If he didn't study (P=F), the implication holds regardless of whether he passed." },
  { topic: 5, lec:"L5", type:"MCQ", tricky:true, difficulty:"hard",
    q:"In Propositional Logic, the Wumpus World sentence B₂,₁↔(P₁,₁∨P₂,₂∨P₃,₁) means:",
    opts:["There is a breeze at 2,1 if and only if there is at least one pit in the adjacent squares","There must be pits in all adjacent squares for a breeze","The wumpus is at 2,1 if adjacent to pits","There is definitely a pit at 2,1"],
    ans:0, exp:"<strong>Biconditional (↔):</strong> B₂,₁↔(P₁,₁∨P₂,₂∨P₃,₁) means 'there is a breeze at [2,1] if and only if there is a pit in at least one of the adjacent squares [1,1], [2,2], or [3,1]'. This is the breezy-near-pit rule." },
  { topic: 5, lec:"L5", type:"MCQ", tricky:true, difficulty:"hard",
    q:"The Physical Symbol Hypothesis states that ___ conditions are necessary and sufficient for intelligent behaviour.",
    opts:["Two — symbols and operations","Three — symbolic patterns, operations on patterns, and search","Four — symbols, operations, knowledge, and search","One — computational modelling"],
    ans:1, exp:"<strong>Three conditions:</strong> (1) symbolic patterns representing significant aspects of domain, (2) operations/processes on patterns generating new patterns, (3) search to select a solution. This is the foundation of Symbolic AI." },
  { topic: 5, lec:"L5", type:"MCQ", tricky:false, difficulty:"med",
    q:"A Well Formed Formula (WFF) in Propositional Logic is:",
    opts:["Any string of logical symbols","A grammatically correct sentence in logic","A sentence that is always true","A sentence with no negation"],
    ans:1, exp:"A <strong>WFF (Well Formed Formula)</strong> is a grammatically correct sentence in the logic language. E.g., 'x+2>3' is a legal sentence (WFF) in arithmetic, while 'x+5-<' is not." },
  { topic: 5, lec:"L5", type:"MCQ", tricky:true, difficulty:"hard",
    q:"Which of these is NOT a valid WFF?",
    opts:["P∧Q","(P∨Q)→R","P¬","¬P"],
    ans:2, exp:"<strong>P¬ is NOT a WFF.</strong> The negation operator ¬ must PRECEDE the proposition. Other non-WFFs listed in slides: P∧¬, ∧PQ, →P." },

  // L6
  { topic: 6, lec:"L6", type:"MCQ", tricky:true, difficulty:"hard",
    q:"'KB ⊨ α if and only if (KB∧¬α) is unsatisfiable' is the basis of:",
    opts:["Forward chaining","Proof by induction","Proof by refutation (reductio ad absurdum)","Modus Ponens"],
    ans:2, exp:"This is <strong>proof by refutation / reductio ad absurdum</strong> — to prove α from KB, you show that KB combined with ¬α leads to a contradiction (is unsatisfiable). If KB∧¬α is always false, then KB must entail α." },
  { topic: 6, lec:"L6", type:"MCQ", tricky:true, difficulty:"hard",
    q:"What is Monotonicity in logic?",
    opts:["Truth values change when new info is added","If KB ⊨ α then KB∧β ⊨ α — additional info CANNOT invalidate prior conclusions","Conclusions must be monotonically increasing","Logic applies to monotone functions only"],
    ans:1, exp:"<strong>Monotonicity:</strong> if KB entails α, then adding any β to KB still entails α. Additional information cannot invalidate conclusions already inferred. This allows proof to ignore irrelevant propositions regardless of how many there are." },
  { topic: 6, lec:"L6", type:"MCQ", tricky:true, difficulty:"hard",
    q:"∀x Study(x,AI)∧Smart(x) means:",
    opts:["Everyone studying AI is smart","Everyone studies AI and everyone is smart","Some people study AI and are smart","If someone studies AI they are smart"],
    ans:1, exp:"<strong>Common mistake with quantifiers!</strong> ∀x Study(x,AI)∧Smart(x) means 'EVERYONE studies AI AND EVERYONE is smart' — not 'everyone studying AI is smart'. The correct form is ∀x Study(x,AI)→Smart(x)." },
  { topic: 6, lec:"L6", type:"MCQ", tricky:true, difficulty:"hard",
    q:"What does ∀x ∃y Loves(x,y) mean?",
    opts:["Everyone is loved by someone","There is someone loved by everyone","Everybody loves someone (everyone has at least one person they love)","Everyone loves everyone"],
    ans:2, exp:"<strong>∀x ∃y Loves(x,y)</strong> = 'for all x, there exists some y that x loves' = <strong>'everybody loves someone'</strong>. Swap the quantifiers: ∃y ∀x Loves(x,y) = 'there is SOMEONE who is loved by EVERYONE'. Order matters!" },
  { topic: 6, lec:"L6", type:"MCQ", tricky:true, difficulty:"hard",
    q:"De Morgan's law in logic: ¬(α∧β) is equivalent to:",
    opts:["¬α∧¬β","¬α∨¬β","α∨β","α∧β"],
    ans:1, exp:"<strong>De Morgan's law: ¬(α∧β) ≡ ¬α∨¬β</strong>. Also: ¬(α∨β) ≡ ¬α∧¬β. These are among the most important logical equivalences in the course." },
  { topic: 6, lec:"L6", type:"MCQ", tricky:true, difficulty:"hard",
    q:"Forward Chaining is ___ -driven while Backward Chaining is ___ -driven.",
    opts:["Goal / Data","Data / Goal","Rule / Fact","Fact / Rule"],
    ans:1, exp:"<strong>Forward Chaining = data-driven</strong> (starts with known facts, fires rules until goal is reached). <strong>Backward Chaining = goal-driven</strong> (starts with goal, works backwards to prove premises). FC is complete; BC avoids loops by checking sub-goals." },

  // L7
  { topic: 7, lec:"L7", type:"MCQ", tricky:true, difficulty:"hard",
    q:"What distinguishes a Fuzzy Expert System (FES) from a Neural Network (NN)?",
    opts:["FES can learn; NN cannot","FES incorporates human expert knowledge directly; NN cannot (only via supervised training)","NN is more accurate than FES","FES uses crisp logic; NN uses fuzzy"],
    ans:1, exp:"<strong>FES directly incorporates human expert knowledge</strong> into rules. NN cannot incorporate expert knowledge directly — only via supervised training on data. However, FES cannot adapt/learn on the fly; NN can. NFS (Neuro-Fuzzy) combines both." },
  { topic: 7, lec:"L7", type:"MCQ", tricky:true, difficulty:"hard",
    q:"In Mamdani fuzzy inference, the correct order of steps is:",
    opts:["Defuzzify → Fuzzify → Apply rules → Aggregate","Fuzzify → Apply rules → Aggregate → Defuzzify","Apply rules → Fuzzify → Defuzzify → Aggregate","Aggregate → Apply rules → Fuzzify → Defuzzify"],
    ans:1, exp:"<strong>Mamdani steps: (1) Fuzzify inputs, (2) Apply rules (get consequent areas), (3) Aggregate all rule consequents, (4) Defuzzify to get single output value.</strong> Defuzzification calculates the 'best representative' point in the aggregate." },
  { topic: 7, lec:"L7", type:"MCQ", tricky:true, difficulty:"hard",
    q:"In Sugeno fuzzy inference, outputs are:",
    opts:["Fuzzy membership functions","Mathematical functions (e.g., polynomials) of the inputs","Crisp binary values","Probability distributions"],
    ans:1, exp:"<strong>Sugeno:</strong> inputs are fuzzy, but outputs are <strong>mathematical functions of the inputs</strong> (typically polynomials). Rule format: 'If x is A and y is B, then z = f(x,y)'. Mamdani has fuzzy outputs; Sugeno has mathematical outputs." },
  { topic: 7, lec:"L7", type:"MCQ", tricky:false, difficulty:"med",
    q:"Fuzzification is:",
    opts:["Converting output to a single crisp value","The method by which physical measurements are assigned linguistic meaning (degree of membership)","Training a neural network with fuzzy data","Creating fuzzy rules from data"],
    ans:1, exp:"<strong>Fuzzification</strong> maps physical measurements to linguistic fuzzy membership continua. E.g., a redness of 7.8 (out of 10) maps to: μAbsent=0, μAmbivalent=0.1, μStrong=0.9. The LAST step (getting crisp value from fuzzy) is defuzzification." },
  { topic: 7, lec:"L7", type:"MCQ", tricky:true, difficulty:"hard",
    q:"A Neuro-Fuzzy System (NFS) combines:",
    opts:["Pure logic and probability","NN adaptability and FES ability to incorporate human expert knowledge","Fuzzy logic and symbolic AI","Expert systems and genetic algorithms"],
    ans:1, exp:"<strong>NFS = NN adaptability + FES expert knowledge</strong>. This gives 'the best of both worlds' — can learn/adapt (from NN) AND incorporates human expertise directly (from FES). Very robust to imperfect data." },

  // ML
  { topic: 8, lec:"ML", type:"MCQ", tricky:true, difficulty:"hard",
    q:"Why is feature scaling CRITICAL for KNN?",
    opts:["It makes the algorithm faster","Features with larger scales dominate the distance calculation, biasing results","It reduces the value of K","It changes the algorithm from lazy to eager learning"],
    ans:1, exp:"<strong>KNN uses distance calculations.</strong> Without scaling, a feature like Income (range 20k–150k) completely dominates distance compared to Age (range 20–80). Scaling ensures all features contribute equally to distance calculations." },
  { topic: 8, lec:"ML", type:"MCQ", tricky:true, difficulty:"hard",
    q:"A small K value in KNN leads to:",
    opts:["High bias, low variance, underfitting","Low bias, high variance, risk of overfitting","Perfect accuracy","No sensitivity to noise"],
    ans:1, exp:"<strong>Small K → low bias, high variance, sensitive to noise, complex decision boundaries, risk of OVERFITTING.</strong> Large K → high bias, low variance, smooth boundaries, risk of underfitting. Rule of thumb: K = √n, use odd K for binary classification." },
  { topic: 8, lec:"ML", type:"MCQ", tricky:true, difficulty:"hard",
    q:"In Linear Regression, the cost function MSE has partial derivatives used to update parameters. Which direction moves toward the minimum?",
    opts:["Adding the gradient to parameters","Subtracting (α × gradient) from parameters","Multiplying parameters by gradient","Using gradient squared"],
    ans:1, exp:"<strong>Gradient Descent:</strong> m = m − α×(∂J/∂m), b = b − α×(∂J/∂b). We SUBTRACT (α × gradient) because we want to move in the direction that DECREASES the cost. α is the learning rate controlling step size." },
  { topic: 8, lec:"ML", type:"MCQ", tricky:false, difficulty:"med",
    q:"R² Score (Coefficient of Determination) measures:",
    opts:["Mean absolute error","Proportion of variance in the target explained by the model","Number of training samples","Model training speed"],
    ans:1, exp:"<strong>R² = 1 − (SS_res / SS_tot)</strong> — proportion of variance explained by the model. R² = 1 means perfect prediction; R² = 0 means model explains nothing; negative R² means model is worse than just predicting the mean." },
  { topic: 8, lec:"ML", type:"MCQ", tricky:true, difficulty:"hard",
    q:"KNN for regression differs from KNN for classification in that it uses:",
    opts:["Manhattan distance instead of Euclidean","Averaging neighbour values instead of majority voting","More neighbours (larger K)","Weighted distance only"],
    ans:1, exp:"<strong>KNN Regression uses averaging</strong> (or weighted average) of K nearest neighbour values. KNN Classification uses majority voting. Example: if neighbours are 10, 12, 14 → predict 12 (average)." },
];

// ====================== CHEW & POUR DATA ======================

const CHEW_ITEMS = [
  { topic: 0, title: "4 Approaches to AI", chew: "There are exactly 4 ways to approach AI: (1) Act Humanly — Turing Test, fooling a human. (2) Think Humanly — cognitive modelling, neurological data. (3) Think Rationally — laws of thought, normative/prescriptive, not all behaviour involves logic. (4) Act Rationally — rational agent, right thing = maximise goal, does NOT necessarily involve thinking (blinking is rational but reflex).", reveal: "Four categories:\n1. ACT HUMANLY → Turing Test approach\n2. THINK HUMANLY → Cognitive modelling of brain\n3. THINK RATIONALLY → Laws of thought, normative\n4. ACT RATIONALLY → Rational agent, does NOT require thinking\n\nKey tricky bit: rational behaviour ≠ thinking. Blinking is the example." },
  { topic: 0, title: "Turing Test Features", chew: "The Turing Test has 3 key features: (1) Gives an OBJECTIVE notion of intelligence — compares to a known intelligent being's behaviour. (2) Prevents distraction by unanswerable philosophical questions (consciousness, internal processes). (3) Eliminates bias toward living organisms — interrogator focuses only on content of answers.", reveal: "1. Objective notion of intelligence\n2. Avoids unanswerable questions (consciousness?)\n3. Eliminates biological bias" },
  { topic: 1, title: "PEAS Framework", chew: "PEAS = Performance Measure, Environment, Actuators, Sensors. Performance = how well the agent performs (safety, destination, profit, comfort). Environment = where it operates (streets, weather, traffic). Actuators = how it acts (steering, brake, accelerator, horns). Sensors = how it perceives (video cameras, gauges, thermostats). NOTE: This concept applies to ALL agents.", reveal: "P — Performance Measure (safety, destination, profit, comfort)\nE — Environment (streets, freeways, traffic, weather)\nA — Actuators (steering, accelerator, brake, horns)\nS — Sensors (video, gauges, engine sensors, thermostats)\n\nApplies to ALL agents!" },
  { topic: 1, title: "5 Agent Types", chew: "5 agent types from simplest to most complex: (1) Simple Reflex — if condition → action, only fully observable environments. (2) Reflex with State — handles partially observable, maintains world model. (3) Goal-based — has goal states, chooses from possibilities to reach goal only. (4) Utility-based — measures HOW DESIRABLE each state is via utility function. (5) Learning — operates in unknown environments, becomes more competent.", reveal: "1. Simple Reflex → if-then, fully observable only\n2. Reflex + State → partial observable, internal model\n3. Goal-based → goal vs non-goal only (binary)\n4. Utility-based → utility function, measures desirability\n5. Learning → unknown environments, grows competent" },
  { topic: 1, title: "Accuracy vs Repeatability", chew: "Accuracy = difference between actual and commanded position. Ability to reach a DESIRED position. Repeatability = variation when commanded to the SAME position repeatedly. It's a statistical concept. Resolution = minimum distance TCP can move. KEY FACT: Repeatability and resolution are usually BETTER than accuracy. Hysteresis error = deviation caused by elastic forces in the motion system.", reveal: "Accuracy → reaches desired location (actual vs commanded)\nRepeatability → returns to SAME taught point (statistical)\nResolution → smallest possible movement\n\nOrder: Repeatability > Accuracy usually\nHysteresis = elastic forces causing deviation" },
  { topic: 2, title: "BFS vs DFS Properties", chew: "BFS: Complete=Yes (finite b), Optimal=Yes (cost=1), Time=O(b^d+1), Space=O(b^d+1) — KEEPS EVERY NODE. Queue (FIFO). DFS: Complete=No (if m infinite), Optimal=No, Time=O(b^m), Space=O(bm) — LINEAR. Stack (LIFO). Key insight: BFS has terrible space because it remembers everything. DFS has terrible time if depth is much larger than solution depth.", reveal: "BFS: Queue (FIFO)\n✓ Complete (finite b), ✓ Optimal (cost=1 per step)\nTime: O(b^d+1), Space: O(b^d+1)\n\nDFS: Stack (LIFO)\n✗ Complete (infinite m), ✗ Optimal\nTime: O(b^m), Space: O(bm) ← LINEAR advantage" },
  { topic: 2, title: "Search Evaluation Criteria", chew: "Every search strategy is evaluated on 4 dimensions: (1) Completeness — will it ALWAYS find a solution if one exists? (2) Time complexity — how many nodes does it generate? (3) Space complexity — how much memory does it need? (4) Optimality — will it find the BEST (shortest/cheapest) solution first? Measured in terms of b (branching factor), d (solution depth), m (max depth).", reveal: "4 evaluation criteria:\n1. Completeness — finds solution if one exists?\n2. Time complexity\n3. Space complexity\n4. Optimality — finds BEST solution?\n\nMeasured by: b (branching), d (solution depth), m (max depth)" },
  { topic: 3, title: "f(n) Evaluation Functions", chew: "The evaluation function f(n) determines the search strategy. Three cases: if f(n)=g(n) only → Uniform Cost Search (expand cheapest path). If f(n)=h(n) only → Greedy Search (expand most promising by heuristic). If f(n)=h(n)+g(n) → A* Search (combines heuristic estimate + actual cost so far). A* is complete and optimal. Greedy is not optimal and not always complete.", reveal: "f(n) = g(n) → Uniform Cost Search\nf(n) = h(n) → Greedy Search\nf(n) = h(n) + g(n) → A* Search\n\nA*: complete, optimal, optimally efficient\nGreedy: not optimal, can loop" },
  { topic: 3, title: "IDS Properties", chew: "IDS (Iterative Deepening Search) performs DFS with depth limit, increasing limit each iteration. Combines: BFS completeness + BFS optimality + DFS linear space. It is complete, optimal, and has linear space O(bd). Seems costly because nodes near top are expanded multiple times, but this is NOT a serious problem since most nodes are at the bottom level anyway.", reveal: "IDS = DFS with increasing depth limit\n✓ Complete, ✓ Optimal, Space: O(bd) LINEAR\nCombines best of BFS + DFS\nSeems wasteful but most nodes are at bottom level" },
  { topic: 4, title: "Alpha-Beta Pruning", chew: "Alpha-beta pruning simplifies the Minimax search space WITHOUT eliminating optimality. Alpha = lower bound (updated at MAX nodes). Beta = upper bound (updated at MIN nodes). Better move ordering = more pruning. With PERFECT ordering: time complexity drops from O(b^m) to O(b^(m/2)) — effectively doubles usable depth. Pruning never changes the final result.", reveal: "α = lower bound (MAX levels)\nβ = upper bound (MIN levels)\nPruning: NEVER affects result\nPerfect ordering: O(b^m/2) ← half the exponent!\nGood ordering = more pruning\nBad ordering (worst moves first) = least pruning" },
  { topic: 4, title: "Horizon Effect & Solutions", chew: "Horizon Effect = inevitable losses are postponed beyond the search look-ahead horizon. Side effects: unachievable goals appear achievable, short-term gains mask unavoidable losses (traps). Three solutions: (1) Feedover — don't cut off at dynamic/non-quiescent positions, keep searching. (2) Secondary Search — search further down selected paths to confirm. (3) Progressive Deepening — search 1 ply, then 2, etc., like IDS.", reveal: "Horizon Effect:\n- Inevitable losses postponed\n- False optimism\n- Traps hidden\n\nSolutions:\n1. Feedover (search non-quiescent positions deeper)\n2. Secondary Search (confirm best move)\n3. Progressive Deepening (IDS-style)" },
  { topic: 5, title: "Implication Truth Table", chew: "P → Q (implication) is counter-intuitive. It is FALSE only when P is TRUE and Q is FALSE. All other combinations are TRUE! So: T→T=T, T→F=F, F→T=T, F→F=T. Think: 'He studied → He passed'. He didn't study but passed (F→T)? Still true — the implication wasn't violated. He studied but failed (T→F)? False — implication broken.", reveal: "P→Q Truth:\nT→T = TRUE\nT→F = FALSE ← only false case!\nF→T = TRUE\nF→F = TRUE\n\nKey: false premise makes implication TRUE always" },
  { topic: 5, title: "PL Connectives", chew: "Propositional Logic has 5 connectives: ∧ (AND/conjunction — both must be true), ∨ (OR/disjunction — at least one true), ¬ (NOT/negation — opposite), → (implication — false ONLY when P=T, Q=F), ↔ (biconditional — true when both same truth value). A literal is an atomic sentence: positive P or negative ¬P.", reveal: "∧ (AND) — both true\n∨ (OR) — at least one true\n¬ (NOT) — opposite\n→ (IF-THEN) — FALSE only T→F\n↔ (IFF) — same truth value\n\nLiteral = atomic: P or ¬P" },
  { topic: 6, title: "Modus Ponens & And-Elimination", chew: "Two key inference rules. Modus Ponens: given (α→β) and α, you can infer β. Example: given (Hungry∧FoodAvailable→Eat) and (Hungry∧FoodAvailable) is true, infer Eat. And-Elimination: from (α∧β), you can infer either α alone or β alone. Example: from (Hungry∧FoodAvailable), infer Hungry.", reveal: "Modus Ponens:\nα→β, α\n————\n   β\n\nAnd-Elimination:\nα∧β\n———\n  α\n\nRemember: these are rules of inference, not just logic rules" },
  { topic: 6, title: "Quantifiers in FOL", chew: "Two quantifiers: Universal (∀) = for ALL values of x. Existential (∃) = for SOME value. Common mistake: ∀x P(x)∧Q(x) means EVERYONE does P AND EVERYONE has Q. Correct form: ∀x P(x)→Q(x). Order matters: ∀x ∃y Loves(x,y) = 'everyone loves someone'. ∃y ∀x Loves(x,y) = 'there is someone loved by everyone'. These are DIFFERENT!", reveal: "∀ = for ALL\n∃ = for SOME\n\nMistake: ∀x Study(x,AI)∧Smart(x) ≠ 'studying AI → smart'\nCorrect: ∀x Study(x,AI)→Smart(x)\n\nOrder matters:\n∀x ∃y Loves(x,y) = everyone loves SOMEONE\n∃y ∀x Loves(x,y) = someone is loved by EVERYONE" },
  { topic: 7, title: "Fuzzy Inference Steps", chew: "Mamdani fuzzy inference has 4 steps: (1) Fuzzify inputs — map physical measurements to linguistic membership values (antecedent values). (2) Apply rules — use rules with antecedent values to get consequent areas. (3) Aggregate — combine all rule consequents into one aggregate area. (4) Defuzzify — extract single crisp output value (the 'best representative' point).", reveal: "1. Fuzzify → map to membership values (antecedents)\n2. Apply rules → get consequent areas\n3. Aggregate → combine all rules\n4. Defuzzify → single crisp output\n\nMamdani: fuzzy inputs AND fuzzy outputs\nSugeno: fuzzy inputs, mathematical outputs" },
  { topic: 7, title: "ES vs NN vs FES vs NFS", chew: "Expert System (ES): incorporates human expert knowledge as rules for inference. Neural Network (NN): brain-inspired, robust to nonlinearity, CANNOT incorporate expert knowledge directly (only via training). Fuzzy Expert System (FES): ES in fuzzy logic, incorporates expert knowledge, CANNOT adapt/learn. Neuro-Fuzzy (NFS): combines NN adaptability + FES expert knowledge = best of both.", reveal: "ES: expert rules, well-defined problems, can't learn\nNN: learns via training, CAN'T use expert knowledge directly\nFES: fuzzy ES, uses expert knowledge, CAN'T adapt\nNFS: NN + FES = adaptable + expert knowledge\n\nKey contrast: FES incorporates knowledge; NN cannot" },
  { topic: 8, title: "KNN Key Facts", chew: "KNN: no training phase (lazy learning), stores all data, uses distance to find K nearest neighbours, then majority vote (classification) or average (regression). Small K: noisy, complex boundary, overfitting. Large K: smooth, underfitting. Rule of thumb: K = √n, use ODD K for binary. Feature scaling is CRITICAL because distance is dominated by large-scale features.", reveal: "KNN = lazy learning, no training\nClassification: majority vote\nRegression: average\n\nSmall K: high variance, overfitting\nLarge K: high bias, underfitting\nK = √n rule, use odd K\n\nScaling: MANDATORY (large features dominate distance)" },
];

// ====================== STATE ======================

let currentPanel = 'home';
let currentTopic = null;
let quizMode = 'all';
let quizTopicFilter = 0;
let quizQuestions = [];
let currentQ = 0;
let selectedOpt = null;
let answered = false;
let score = 0;
let chewIndex = 0;
let chewTopicFilter = -1;
let filteredChew = [...CHEW_ITEMS];

// ====================== PANEL NAV ======================

function showPanel(id) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  const tabs = document.querySelectorAll('.nav-tab');
  const map = { home: 0, notes: 1, quiz: 2, chew: 3 };
  if (map[id] !== undefined) tabs[map[id]].classList.add('active');
  currentPanel = id;
  if (id === 'notes') initNotes();
  if (id === 'quiz') initQuizSetup();
  if (id === 'chew') initChew();
}

// ====================== NOTES ======================

function initNotes() {
  const grid = document.getElementById('notes-grid');
  if (grid.children.length > 0) return;
  NOTES.forEach((n, i) => {
    const t = TOPICS[i];
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.setAttribute('data-lec', t.lec.toLowerCase().replace('l','') || t.lec.toLowerCase());
    card.style.setProperty('--accent-color', t.color);
    card.innerHTML = `<div class="lec-badge">${t.lec}</div><h3>${n.title}</h3><p>${n.concepts.length} concepts · Click to study</p>`;
    card.onclick = () => openTopic(i);
    grid.appendChild(card);
  });
}

function openTopic(i) {
  const note = NOTES[i];
  const topic = TOPICS[i];
  document.getElementById('notes-list').style.display = 'none';
  document.getElementById('notes-content').style.display = 'block';
  const body = document.getElementById('content-body');
  body.innerHTML = `<h2>${note.title}</h2><div class="subtitle">${note.subtitle}</div>
  ${note.concepts.map(c => `
    <div class="concept-block">
      <h4>${c.title}</h4>
      <div>${c.body}</div>
    </div>
  `).join('')}`;
  showPanel('notes');
  window.scrollTo(0, 56);
}

function showNotesList() {
  document.getElementById('notes-list').style.display = 'block';
  document.getElementById('notes-content').style.display = 'none';
}

// ====================== QUIZ ======================

let selectedMode = 'all';

function selectMode(mode, el) {
  selectedMode = mode;
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('topic-select-area').style.display = mode === 'topic' ? 'block' : 'none';
}

function initQuizSetup() {
  const tf = document.getElementById('quiz-topic-filter');
  if (tf.children.length > 0) return;
  TOPICS.forEach((t, i) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (i === 0 ? ' active' : '');
    btn.textContent = t.lec + ' ' + t.title.split(' ').slice(0,2).join(' ');
    btn.onclick = () => {
      document.querySelectorAll('#quiz-topic-filter .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      quizTopicFilter = i;
    };
    tf.appendChild(btn);
  });
}

function startQuiz() {
  let pool;
  if (selectedMode === 'all') pool = shuffle([...QUESTIONS]).slice(0, 30);
  else if (selectedMode === 'topic') pool = shuffle(QUESTIONS.filter(q => q.topic === quizTopicFilter)).slice(0, 20);
  else if (selectedMode === 'tricky') pool = shuffle(QUESTIONS.filter(q => q.tricky)).slice(0, 25);
  else pool = shuffle([...QUESTIONS]).slice(0, 10);
  quizQuestions = pool;
  currentQ = 0; score = 0; selectedOpt = null; answered = false;
  document.getElementById('quiz-setup-view').style.display = 'none';
  document.getElementById('quiz-active-view').style.display = 'block';
  document.getElementById('quiz-score-view').style.display = 'none';
  renderQuestion();
}

function renderQuestion() {
  const q = quizQuestions[currentQ];
  const total = quizQuestions.length;
  selectedOpt = null; answered = false;
  document.getElementById('qMeta').textContent = `Q ${currentQ + 1} / ${total}`;
  document.getElementById('qProgress').style.width = ((currentQ / total) * 100) + '%';
  const diffTag = q.difficulty === 'hard' ? 'tag-hard' : q.difficulty === 'med' ? 'tag-med' : 'tag-easy';
  document.getElementById('qContainer').innerHTML = `
    <div class="question-card">
      <div class="q-type"><span class="tag ${diffTag}">${q.difficulty.toUpperCase()}</span> ${q.lec} · ${q.type} ${q.tricky ? '<span class="tag tag-hard">🔥 TRICKY</span>' : ''}</div>
      <div class="q-text">${q.q}</div>
      <div class="options">
        ${q.opts.map((o, i) => `<button class="option" id="opt${i}" onclick="selectOpt(${i})">
          <span class="option-letter">${String.fromCharCode(65+i)}.</span><span>${o}</span>
        </button>`).join('')}
      </div>
      <div class="explanation" id="explanation">${q.exp}</div>
    </div>`;
  document.getElementById('btnCheck').style.display = 'inline-block';
  document.getElementById('btnNext').style.display = 'none';
  document.getElementById('btnFinish').style.display = 'none';
}

function selectOpt(i) {
  if (answered) return;
  selectedOpt = i;
  document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
  document.getElementById('opt' + i).classList.add('selected');
}

function checkAnswer() {
  if (selectedOpt === null) { alert('Pick an option first!'); return; }
  answered = true;
  const q = quizQuestions[currentQ];
  document.querySelectorAll('.option').forEach(o => o.classList.add('locked'));
  document.getElementById('opt' + q.ans).classList.add('correct');
  if (selectedOpt !== q.ans) {
    document.getElementById('opt' + selectedOpt).classList.add('wrong');
  } else {
    score++;
  }
  document.getElementById('explanation').classList.add('show');
  document.getElementById('btnCheck').style.display = 'none';
  if (currentQ < quizQuestions.length - 1) {
    document.getElementById('btnNext').style.display = 'inline-block';
  } else {
    document.getElementById('btnFinish').style.display = 'inline-block';
  }
}

function nextQuestion() {
  currentQ++;
  renderQuestion();
}

function showScore() {
  document.getElementById('quiz-active-view').style.display = 'none';
  document.getElementById('quiz-score-view').style.display = 'block';
  const pct = Math.round((score / quizQuestions.length) * 100);
  const color = pct >= 70 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444';
  document.getElementById('scoreBig').textContent = pct + '%';
  document.getElementById('scoreBig').style.color = color;
  document.getElementById('scoreLabel').textContent = `${score} / ${quizQuestions.length} correct — ${pct >= 70 ? 'Solid! 🔥' : pct >= 50 ? 'Getting there 📈' : 'Keep drilling 💪'}`;
}

function endQuiz() {
  if (confirm('End quiz and see current score?')) showScore();
}
function resetQuiz() {
  document.getElementById('quiz-setup-view').style.display = 'block';
  document.getElementById('quiz-active-view').style.display = 'none';
  document.getElementById('quiz-score-view').style.display = 'none';
}

// ====================== CHEW & POUR ======================

function initChew() {
  const sel = document.getElementById('chewTopicSel');
  if (sel.children.length > 0) { renderChew(); return; }
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.textContent = 'All Topics';
  allBtn.onclick = () => {
    chewTopicFilter = -1;
    filteredChew = [...CHEW_ITEMS];
    chewIndex = 0;
    document.querySelectorAll('.chew-topic-sel .filter-btn').forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
    renderChew();
  };
  sel.appendChild(allBtn);
  TOPICS.forEach((t, i) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = t.lec;
    btn.onclick = () => {
      chewTopicFilter = i;
      filteredChew = CHEW_ITEMS.filter(c => c.topic === i);
      chewIndex = 0;
      document.querySelectorAll('.chew-topic-sel .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderChew();
    };
    sel.appendChild(btn);
  });
  renderChew();
}

function renderChew() {
  if (filteredChew.length === 0) {
    document.getElementById('chewContent').innerHTML = '<em class="chew-empty">No items for this topic yet.</em>';
    document.getElementById('chewCounter').textContent = '0/0';
    return;
  }
  const item = filteredChew[chewIndex];
  document.getElementById('chewContent').innerHTML = `<strong class="chew-item-title">${item.title}</strong>${item.chew}`;
  document.getElementById('chewCounter').textContent = `${chewIndex + 1} / ${filteredChew.length}`;
  document.getElementById('pourInput').value = '';
  document.getElementById('pourReveal').textContent = '';
  document.getElementById('pourReveal').classList.remove('show');
}

function nextChew() { chewIndex = (chewIndex + 1) % filteredChew.length; renderChew(); }
function prevChew() { chewIndex = (chewIndex - 1 + filteredChew.length) % filteredChew.length; renderChew(); }

function revealPour() {
  const item = filteredChew[chewIndex];
  document.getElementById('pourReveal').textContent = item.reveal;
  document.getElementById('pourReveal').classList.add('show');
}

function clearPour() {
  document.getElementById('pourInput').value = '';
  document.getElementById('pourReveal').classList.remove('show');
}

// ====================== UTILS ======================

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ====================== INIT ======================

window.onload = () => {
  initNotes();
  const nGrid = document.getElementById('notes-grid');
  nGrid.style.display = 'none';
};

