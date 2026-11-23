import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'skygrid',
    name: 'SkyGrid Intelligence',
    tagline: 'Aviation Risk Intelligence & Airspace Hazard-Monitoring Platform',
    description: 'An airspace safety telemetry platform providing real-time flight corridor hazard scoring, severe weather radar overlays, and audit-ready safety logging for African and regional aviation corridors.',
    category: 'Aviation Risk Intelligence',
    status: 'Prototype / Evaluation',
    statusColor: 'blue',
    website: 'https://skygrid-intelligence.vercel.app/',
    primaryImage: '/assets/skygrid_hero.png',
    gallery: [
      '/assets/skygrid_hero.png',
      '/assets/skygrid_preview.png',
    ],
    keyFeatures: [
      'Real-time ADS-B flight corridor tracking and spatial indexing',
      'Dynamic weather hazard desk with convective storm radar layers',
      'Air corridor risk index scoring algorithm (0-100 composite index)',
      'Runway micro-climate and approach visibility analytics',
      'Audit-grade fleet log archiving and safety event telemetry',
      'Cryptographically verifiable flight dispatch hazard briefings'
    ],
    technicalArchitecture: [
      'Continuous ingestion of live ADS-B Mode-S transponder telemetry streams',
      'Atmospheric satellite radar integration for tropical convective cell mapping',
      'Spatial calculation engine projecting aircraft vectors onto active hazard polygons',
      'Sub-second risk index calculation surfaced via interactive Leaflet/WebGL map',
      'Automated dispatch alerts triggerable for flights approaching high-severity airspace'
    ],
    problemSolved: 'African regional flight corridors frequently encounter sudden equatorial weather anomalies with delayed advisory dissemination, exposing regional carriers and charters to elevated operational risk.',
    stageDetails: 'Functional evaluation prototype deployed and accessible online at skygrid-intelligence.vercel.app. Open for airline operations and regulatory evaluation.',
    technologies: ['React', 'TypeScript', 'Leaflet / WebGL', 'FastAPI', 'ADS-B Stream Ingestion', 'Spatial Hazard Scoring', 'Vercel']
  },
  {
    id: 'tradeshield',
    name: 'TradeShield AI',
    tagline: 'AI-Assisted Supplier Fraud & Cross-Border Trade Risk Investigation',
    description: 'An evidence-first investigation platform engineered to detect supplier fraud, cross-document discrepancies, dark fleet maritime sanctions evasions, and illicit trade across commercial corridors.',
    category: 'Trade-Risk Technology & AI',
    status: 'Functional prototype under development',
    statusColor: 'cyan',
    website: 'https://tradeshield-ai-4qr.pages.dev/login',
    primaryImage: '/assets/tradeshield_executive_overview_dashboard_1.png',
    gallery: [
      '/assets/tradeshield_executive_overview_dashboard_1.png',
      '/assets/tradeshield_real_time_dark_fleet_ais_vessel_tracking_matrix.png',
      '/assets/tradeshield_entity_shadow_graph_sanctions_ownership_network.png',
      '/assets/tradeshield_cross_document_diff_document_intelligence_studio.png'
    ],
    keyFeatures: [
      'Cross-document diff studio parsing Bills of Lading, Invoices, and Letters of Credit',
      'Dark fleet AIS vessel spoofing and transponder gap anomaly detection',
      'Entity shadow graph mapping corporate ownership and international sanctions lists',
      'Automated Suspicious Activity Report (SAR) XML/PDF evidence generation',
      'Multi-jurisdiction corporate registry verification and LEI matching',
      'Real-time wire payment diversion and fraudulent account modification alerts'
    ],
    technicalArchitecture: [
      'Deterministic document intelligence engine parsing PDF/DOCX trade documentation',
      'Exact source document citations with page numbers and quoted excerpts',
      'Graph database engine tracking multi-hop beneficial ownership and sanctions links',
      'Satellite AIS marine positional stream cross-matched against declared port calls',
      'Human-in-the-loop review gates prior to consequential payment release actions'
    ],
    problemSolved: 'Importers, commodity traders, and African trade banks lose billions annually to supplier invoice fraud, phantom shipments, and illicit sanction evasion using dark fleet maritime schemes.',
    stageDetails: 'Functional prototype in active development. Document extraction pipelines, deterministic discrepancy comparisons, and dark fleet anomaly detection models undergoing test validation.',
    technologies: ['Python 3.12+', 'PyMuPDF', 'FastAPI', 'React', 'TypeScript', 'Deterministic Fraud Rules', 'Graph Networks']
  },
  {
    id: 'portvault',
    name: 'PORTVAULT OS',
    tagline: 'Maritime Revenue Protection & Cargo Chain-of-Custody Operating System',
    description: 'An enterprise maritime operating system bridging terminal cargo release operations, multimodal chain-of-custody verification, and statutory port revenue assurance with zero-paper cryptographic clearance.',
    category: 'Maritime Software & Revenue Protection',
    status: 'Technology prototype',
    statusColor: 'indigo',
    primaryImage: '/assets/portvault_maritime_command.png',
    gallery: [
      '/assets/portvault_maritime_command.png',
      '/assets/portvault_landing_page.png',
      '/assets/portvault_isometric_port_3d.png',
      '/assets/portvault_smartgate.png',
      '/assets/portvault_cargochain.png',
      '/assets/portvault_revenuevault.png',
      '/assets/portvault_sentinel.png'
    ],
    keyFeatures: [
      'SmartGate Clearance with HMAC-SHA256 digitally signed expiring optical QR passes',
      'CargoChain Multimodal Custody with zero-plaintext salted SHA-256 PIN handover',
      'RevenueVault statutory tariff reconciliation against bank settlement references',
      'Sentinel AI Guard: 5-rule deterministic anomaly monitor with JSON machine evidence',
      '3D Isometric Terminal Digital Twin and multimodal logistics corridor tracking',
      'Automated velocity rate-limiting and brute-force lockout protections'
    ],
    technicalArchitecture: [
      'FastAPI REST backend with declarative SQLAlchemy 2.0 ORM data layer',
      'HMAC-SHA256 cryptographic signature generator with 30-minute pass TTL',
      'Salted SHA-256 one-time handover PIN hashing with 3-attempt velocity lockout',
      'Automated tariff calculation engine mapped to container dimensions and hazardous tiers',
      'Client-side responsive dashboard featuring interactive SVG terminal twin and Recharts'
    ],
    problemSolved: 'Seaports and terminal operators suffer massive losses from forged paper delivery orders, cargo diversion, demurrage evasion, and unverified multi-party handovers between terminals, bonded warehouses, and dry ports.',
    stageDetails: 'Comprehensive enterprise technology prototype completed and validated with automated regression suites across gate operations, custody transfers, and revenue reconciliation modules.',
    technologies: ['FastAPI', 'Python 3.14', 'SQLAlchemy 2.0', 'React 19', 'TypeScript', 'Tailwind CSS', 'HMAC-SHA256', 'Recharts']
  },
  {
    id: 'routena',
    name: 'Routena',
    tagline: 'Fuel-Aware Dynamic Ride Pricing & Sovereign Urban Mobility Platform',
    description: 'An urban mobility technology platform engineered for fuel-volatile economies, featuring dynamic energy-indexed driver payouts, offline cryptographic credential validation, and verified driver KYC.',
    category: 'Digital Infrastructure & Mobility',
    status: 'Prototype',
    statusColor: 'amber',
    primaryImage: '/assets/routena_routena_landing_page.png',
    gallery: [
      '/assets/routena_routena_landing_page.png',
      '/assets/routena_routena_operations_admin_fuel_index_command_center.png',
      '/assets/routena_routena_driver_partner_dashboard.png',
      '/assets/routena_routena_passenger_ride_booking.png',
      '/assets/routena_routena_live_trip_tracking_pin.png',
      '/assets/routena_routena_roadside_digital_credential_inspection_mode_2.png'
    ],
    keyFeatures: [
      'Dynamic fuel-indexed fare calculation protecting driver margins during pump price spikes',
      'Operations command center monitoring municipal pump price indices across urban nodes',
      'Roadside digital credential inspection mode for offline verification by municipal officers',
      'Cryptographic Safe-Handover biometric and PIN exchange sequence',
      'Offline keystore seal preserving trip logs during cellular network blackouts',
      'Streamlined driver KYC approval pipeline with vehicle safety inspections'
    ],
    technicalArchitecture: [
      'Real-time municipal pump price feed engine computing adaptive energy multipliers',
      'Algorithmic fare partitioning model isolating vehicle maintenance overhead from fuel delta',
      'Asymmetric cryptographic key-pair exchange between driver and passenger mobile clients',
      'Offline-first SQLite keystore synchronizing encrypted audit bundles upon reconnect',
      'Web-based fleet admin console managing municipal corridors and driver KYC verification'
    ],
    problemSolved: 'Global ride-hailing platforms fail in high-inflation African markets where fuel prices double abruptly, causing driver strikes, app abandonment, and offline passenger extortion.',
    stageDetails: 'Prototype system exploring fairer ride pricing algorithms and operational workflows, complete with operations console, driver companion interface, and passenger booking prototypes.',
    technologies: ['React', 'TypeScript', 'Adaptive Pricing Engine', 'Offline SQLite Sync', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 'calabarpass',
    name: 'CalabarPass',
    tagline: 'Tourism Discovery, Merchant Escrow & Regional Voucher Clearinghouse',
    description: 'A sub-sovereign digital clearinghouse and voucher marketplace solving transaction insecurity, unverified merchants, and booking dispute friction in the regional tourism economy.',
    category: 'Enterprise Software & Escrow Clearing',
    status: 'MVP / Pre-commercial pilot under development',
    statusColor: 'emerald',
    website: 'https://calabarpass.vercel.app',
    primaryImage: '/assets/calabarpass_architecture.png',
    gallery: [
      '/assets/calabarpass_architecture.png',
      '/assets/calabarpass_voucher.png',
    ],
    keyFeatures: [
      'Dual-Key 6-Digit PIN Check-In Terminal validation for hospitality venues',
      'Paystack-integrated isolated escrow vault balance locking upon booking',
      'Instant automated merchant settlement upon verified check-in PIN match',
      'Cryptographic tamper-evident offline voucher generation with verification secrets',
      'Sub-sovereign regional tourism compliance and accredited merchant registry',
      'Brute-force attack mitigation via ScopeGuard rate limiting'
    ],
    technicalArchitecture: [
      'Tourist initiates booking via authenticated mobile client',
      'Payment processed via Paystack gateway into isolated escrow vault account',
      'Core engine synthesizes cryptographic voucher with 6-digit verification secret',
      'Front-desk merchant terminal inputs Reference ID + Tourist provides secret PIN',
      'Real-time reconciliation engine validates signature and unlocks escrow balance'
    ],
    problemSolved: 'Tourists face fraud anxiety and unverified merchant services; local tourism operators suffer from cash leakage, delayed bank reconciliation, and booking dispute chargebacks.',
    stageDetails: 'Tourism discovery and booking platform under development; pre-commercial pilot evaluation in regional tourism corridors.',
    technologies: ['React', 'TypeScript', 'Paystack Escrow Architecture', 'HMAC Voucher Verification', 'Tailwind CSS']
  },
  {
    id: 'aetherguard',
    name: 'AetherGuard',
    tagline: 'Defensive Security & Automated Zero-Trust Threat Surface Modeling',
    description: 'A security-focused product initiative within the Akanno Tech Labs portfolio dedicated to perimeter defense, continuous credential integrity auditing, and cryptographic access validation.',
    category: 'Cybersecurity & Defensive Engineering',
    status: 'Product Initiative / Security R&D',
    statusColor: 'cyan',
    primaryImage: '/assets/portvault_maritime_command.png',
    gallery: [
      '/assets/portvault_maritime_command.png'
    ],
    keyFeatures: [
      'Automated threat modeling aligned with OWASP ASVS standards',
      'Continuous cryptographic credential verification and tamper alerts',
      'Immutable SIEM event logging with hash-chained integrity proofs',
      'Zero-trust micro-segmentation blueprints for regional cloud infrastructure'
    ],
    technicalArchitecture: [
      'Stateless HMAC-SHA256 token verification middleware',
      'Asymmetric public-key verification layer for microservice RPCs',
      'Real-time anomaly scoring for abnormal API authorization requests',
      'Automated compliance report exporter for enterprise security reviews'
    ],
    problemSolved: 'Regional enterprises face sophisticated credential compromise and ransomware vectors while relying on fragmented security point solutions lacking unified verification proofs.',
    stageDetails: 'Security-focused product initiative and engineering research program undergoing internal protocol validation.',
    technologies: ['Cryptographic Verification', 'Threat Modeling', 'Zero Trust Architecture', 'Python', 'FastAPI']
  }
];
