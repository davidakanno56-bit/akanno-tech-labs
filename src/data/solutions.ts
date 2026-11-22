import type { Solution } from '../types';

export const SOLUTIONS: Solution[] = [
  {
    id: 'enterprise-software',
    title: 'Enterprise Software',
    category: 'Core Engineering',
    tagline: 'High-throughput, distributed software architectures built for mission-critical operations.',
    description: 'We architect and build robust enterprise platforms, custom ERP backbones, automated clearance engines, and high-concurrency transactional systems. Our systems are engineered for operational continuity, strict data consistency, and seamless integration with sovereign and institutional workflows.',
    coreCapabilities: [
      'Multi-tenant enterprise operational backbones and ERP systems',
      'High-concurrency settlement and transactional reconciliation pipelines',
      'Auditable workflow automation engines with role-based access control (RBAC)',
      'Fault-tolerant data persistence and offline-first mobile synchronization'
    ],
    targetSectors: ['Financial Services', 'Supply Chain & Logistics', 'Public Sector & Parastatals', 'Regional Commerce'],
    technologies: ['TypeScript', 'Python', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'REST / GraphQL'],
    relatedProducts: ['calabarpass', 'portvault']
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    category: 'Intelligent Platforms',
    tagline: 'Applied, evidence-first machine intelligence solving complex analytical challenges.',
    description: 'We do not build generic AI chatbot wrappers. We engineer pragmatic, deterministic, and explainable AI systems tailored to heavy-duty enterprise problem spaces: multimodal document intelligence, discrepancy detection, automated regulatory reporting, and spatial hazard analytics.',
    coreCapabilities: [
      'Multimodal document parsing and deterministic cross-file discrepancy engines',
      'Beneficial ownership graph analytics and sanctions list matching',
      'Spatial hazard modeling and predictive anomaly detection',
      'Explainable AI pipelines with granular source-level citations'
    ],
    targetSectors: ['Cross-Border Trade', 'Banking & Trade Finance', 'Regulatory Compliance', 'Aviation Safety'],
    technologies: ['PyTorch', 'Vector Embeddings', 'Graph Analytics', 'PyMuPDF', 'FastAPI', 'Leaflet / WebGL'],
    relatedProducts: ['tradeshield', 'skygrid']
  },
  {
    id: 'cybersecurity-engineering',
    title: 'Cybersecurity Engineering',
    category: 'Defensive Systems',
    tagline: 'Defensive security architectures, cryptographic verification, and tamper-evident data integrity.',
    description: 'Spearheaded by founder David Gini Akanno (certified SOC analyst and defensive security researcher), our security engineering practice embeds zero-trust controls, cryptographic authentication protocols, and rigorous threat modeling into every layer of software design.',
    coreCapabilities: [
      'Zero-trust network architecture design and threat vector surface minimization',
      'HMAC-SHA256 and asymmetric cryptographic verification protocols',
      'Tamper-evident audit trails with cryptographic hash chaining',
      'Security Operations Center (SOC) telemetry readiness and SIEM logging protocols'
    ],
    targetSectors: ['Critical Infrastructure', 'Fintech & Escrow', 'Maritime Port Terminals', 'Corporate Enterprises'],
    technologies: ['HMAC-SHA256', 'Salted SHA-256 Hashing', 'OWASP ASVS', 'Zero Trust', 'SIEM / Log Aggregation'],
    relatedProducts: ['portvault', 'calabarpass', 'tradeshield']
  },
  {
    id: 'aviation-intelligence',
    title: 'Aviation Intelligence',
    category: 'Telemetry & Hazard Analytics',
    tagline: 'Real-time airspace telemetry, flight corridor hazard scoring, and micro-climate analytics.',
    description: 'We build aviation intelligence systems that ingest live transponder streams, cross-reference atmospheric radar models, and calculate sub-second risk indices for commercial and charter flight corridors.',
    coreCapabilities: [
      'Continuous ADS-B Mode-S transponder stream ingestion and corridor vector indexing',
      'Convective weather radar overlay synthesis and tropical storm tracking',
      'Algorithmic composite hazard index computation (0-100 risk score)',
      'Automated dispatch alerts and cryptographically sealed safety briefings'
    ],
    targetSectors: ['Commercial Airlines', 'Charter Operators', 'Civil Aviation Regulators', 'Airport Ground Operations'],
    technologies: ['ADS-B Decoders', 'Spatial GIS Calculations', 'Leaflet', 'FastAPI', 'High-Concurrency Ingestion'],
    relatedProducts: ['skygrid']
  },
  {
    id: 'trade-risk-technology',
    title: 'Trade-Risk Technology',
    category: 'Commercial Counterparty Security',
    tagline: 'Evidence-first supplier fraud investigation, document diffing, and maritime sanctions tracking.',
    description: 'International commerce and cross-border trade corridors face persistent exposure to phantom shipments, falsified bills of lading, supplier impersonation, and dark fleet sanctions evasions. We engineer platforms that illuminate trade counterparty risk with indisputable documentary evidence.',
    coreCapabilities: [
      'Automated cross-document diffing comparing invoices, packing lists, and bills of lading',
      'Dark fleet AIS vessel spoofing and transponder gap anomaly detection',
      'Corporate shadow graph discovery uncovering hidden sanctioned ownership links',
      'Compliant audit dossier export and Suspicious Activity Report (SAR) XML/PDF packages'
    ],
    targetSectors: ['Commodity Traders', 'Trade Finance Banks', 'Customs Brokers', 'Maritime Insurance'],
    technologies: ['PyMuPDF', 'Deterministic Fraud Rules', 'Graph Databases', 'AIS Stream Processing', 'TypeScript'],
    relatedProducts: ['tradeshield']
  },
  {
    id: 'maritime-software',
    title: 'Maritime Software',
    category: 'Port Operations & Terminal Infrastructure',
    tagline: 'Digital terminal gate automation, multimodal cargo chain-of-custody, and statutory tariff assurance.',
    description: 'We develop mission-critical maritime operating software that modernizes port terminal clearance. By replacing forged paper delivery orders with cryptographically signed, optical QR passes and salted one-time custody transfer PINs, our platforms eliminate revenue leakage and cargo theft.',
    coreCapabilities: [
      'Optical SmartGate clearance with HMAC-SHA256 expiring QR passes',
      'CargoChain multimodal custody tracking with zero-plaintext salted PIN verification',
      'Automated statutory port tariff settlement and bank reference reconciliation',
      'Sentinel AI Guard: deterministic anomaly monitoring and terminal exception handling'
    ],
    targetSectors: ['Seaport Terminals', 'Customs Authorities', 'Inland Container Depots', 'Bonded Freight Operators'],
    technologies: ['FastAPI', 'SQLAlchemy', 'HMAC Signatures', 'React', 'SVG Digital Twins', 'Recharts'],
    relatedProducts: ['portvault']
  },
  {
    id: 'digital-infrastructure',
    title: 'Digital Infrastructure',
    category: 'Sovereign Scalability',
    tagline: 'Resilient digital backbones engineered to thrive amidst infrastructural and economic volatility.',
    description: 'African digital infrastructure requires specialized engineering: systems that withstand undersea fiber cuts, volatile municipal fuel indices, sporadic cellular connectivity, and sudden currency fluctuations. We design fault-tolerant systems with local caching, offline sync, and dynamic economic models.',
    coreCapabilities: [
      'Fuel-indexed adaptive fare and tariff algorithms for volatile energy markets',
      'Offline-first mobile keystores with asynchronous reconciliation upon reconnect',
      'Sub-sovereign clearinghouses and isolated payment escrow vaults',
      'Low-bandwidth edge proxy deployments optimized for regional telecommunications'
    ],
    targetSectors: ['Urban Transit Fleets', 'Regional State Governments', 'Municipal Authorities', 'Enterprise Fleets'],
    technologies: ['Offline SQLite Sync', 'Algorithmic Pricing Engines', 'Edge CDNs', 'Docker', 'WireGuard'],
    relatedProducts: ['routena', 'calabarpass']
  }
];
