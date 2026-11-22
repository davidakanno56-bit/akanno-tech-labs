import type { Capability } from '../types';

export const CAPABILITIES: Capability[] = [
  {
    id: 'enterprise-software',
    title: 'Enterprise Software Engineering',
    badge: 'Core Competency',
    summary: 'High-throughput, distributed software architectures built to withstand African infrastructural volatility while meeting global enterprise standards.',
    description: 'We design and develop robust backend systems, resilient microservices, and high-concurrency transactional backbones. Our engineering prioritizes fault tolerance, offline-first data synchronization, and rigorous event-driven patterns.',
    technologies: ['TypeScript', 'Go', 'Python / FastAPI', 'PostgreSQL', 'Redis', 'Kafka / Event-Driven', 'Docker'],
    deliverables: [
      'Multi-tenant enterprise ERP & operational platforms',
      'High-concurrency payment and settlement gateways',
      'Fault-tolerant offline-first mobile applications',
      'API engines with zero-trust architectural design'
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Security Engineering',
    badge: 'Defensive Systems',
    summary: 'Comprehensive threat modeling, defensive security engineering, SOC telemetry readiness, and cryptographic data integrity validation.',
    description: 'Under the technical guidance of founder David Gini Akanno (software developer with a background in cybersecurity, software development, and startup product building), we embed security into the development lifecycle from day one, rather than treating it as an afterthought.',
    technologies: ['Zero Trust Architecture', 'Cryptographic Verification', 'SIEM / SOC Integration', 'Threat Modeling', 'OWASP ASVS', 'Hardware-backed Keystores'],
    deliverables: [
      'Pre-audit threat surface mapping & vulnerability triage',
      'Cryptographic dual-key and PIN verification protocols',
      'Immutable audit logging & tamper-evident data trails',
      'Enterprise security postures tailored for fintech & trade compliance'
    ]
  },
  {
    id: 'ai-automation',
    title: 'Artificial Intelligence & Automation',
    badge: 'Intelligent Platforms',
    summary: 'Domain-specific machine learning models, spatial hazard calculation, sanctions matching, and multimodal trade document intelligence.',
    description: 'We do not build generic chatbot wrappers. We engineer pragmatic AI platforms solving hard real-world operational problems: cross-document fraud detection, dark fleet AIS maritime anomaly detection, and aviation risk scoring.',
    technologies: ['PyTorch', 'Vector Databases', 'Spatial Telemetry Math', 'Document OCR Diffing', 'Graph Networks', 'Automated SAR Pipelines'],
    deliverables: [
      'Cross-document fraud & discrepancy intelligence engines',
      'Beneficial ownership & sanctions shadow graph matchers',
      'Real-time spatial anomaly & hazard calculation models',
      'Autonomous regulatory compliance report generators'
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Digital Infrastructure',
    badge: 'Sovereign Scale',
    summary: 'Mission-critical cloud orchestration, edge deployment, containerized microservices, and high-availability African sovereign networking.',
    description: 'African digital infrastructure requires multi-region resilience, graceful degradation during undersea cable disruptions, and ultra-low latency edge CDN caching. We engineer cloud topologies that stay online regardless of external shocks.',
    technologies: ['Kubernetes', 'Terraform / IaC', 'Cloudflare Workers / Edge', 'GCP / AWS Multi-Region', 'PostgreSQL Replicas', 'WireGuard VPNs'],
    deliverables: [
      'Multi-region high-availability infrastructure deployments',
      'Automated CI/CD deployment pipelines with security gates',
      'Edge-cached API proxies optimized for mobile low-bandwidth networks',
      'Disaster recovery strategies with automated failover'
    ]
  },
  {
    id: 'digital-commerce',
    title: 'Digital Commerce Platforms',
    badge: 'Transaction Integrity',
    summary: 'Sub-sovereign clearinghouses, Paystack-backed isolated escrow pipelines, dynamic algorithmic pricing, and merchant check-in terminals.',
    description: 'We architect next-generation commerce infrastructure that eliminates payment mistrust between unacquainted parties. From tourism voucher escrow to dynamic fuel-pegged transport pricing, our platforms secure economic velocity.',
    technologies: ['Isolated Escrow Vaults', 'Paystack API', 'Dynamic Pricing Algorithmic Engines', 'Webhooks Reconciliation', 'Cryptographic QR Terminals'],
    deliverables: [
      'Sub-sovereign digital clearinghouses with dual PIN verification',
      'Fuel-indexed adaptive fare engines for transport fleets',
      'Merchant point-of-verification software terminals',
      'Automated multi-party commission settlement engines'
    ]
  }
];
