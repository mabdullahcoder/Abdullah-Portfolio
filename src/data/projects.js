export const projects = [
  {
    slug: "fintech-ledger-api",
    title: "Fintech Ledger API",
    role: "Lead Engineer",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80",
    stat: { value: "400k+", label: "daily events processed" },
    description:
      "High-throughput transactions ledger processing 400k+ daily events with zero downtime.",
    tags: ["Node.js", "Postgres", "Kafka", "Redis"],
    overview:
      "A double-entry ledger service built to sit at the core of a digital banking platform. It needed to process hundreds of thousands of transactions a day, stay consistent under concurrent writes, and never lose a cent of state — even during rolling deploys.",
    highlights: [
      "Designed an event-sourced ledger on Kafka with idempotent consumers, eliminating duplicate-write risk under retries.",
      "Cut p99 write latency from 480ms to 60ms by moving hot balance reads to a Redis-backed cache layer.",
      "Shipped a zero-downtime migration strategy for schema changes across a 40M-row Postgres cluster.",
      "Processed 400k+ daily transaction events with 99.99% uptime over the following two quarters.",
    ],
  },
  {
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    role: "Full Stack",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    stat: { value: "<400ms", label: "p95 query time" },
    description:
      "Real-time data visualization engine with complex multi-tenant dashboards at scale.",
    tags: ["Next.js", "ClickHouse", "React"],
    overview:
      "A multi-tenant analytics product giving product teams real-time visibility into user behavior — funnels, retention, and session replay summaries — without the dashboard buckling under high-cardinality queries.",
    highlights: [
      "Modeled event ingestion on ClickHouse, bringing p95 query times for billion-row funnels under 400ms.",
      "Built a composable charting layer in Next.js and React Server Components, cutting dashboard TTI by 55%.",
      "Designed tenant isolation at the query layer so no customer's data could leak into another's view.",
      "Rolled out to 30+ enterprise workspaces with zero data-isolation incidents.",
    ],
  },
  {
    slug: "ecommerce-orchestrator",
    title: "E-Commerce Orchestrator",
    role: "Architect",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80",
    stat: { value: "99.99%", label: "checkout availability" },
    description:
      "Serverless checkout platform handling peak Black Friday traffic at 99.99% availability.",
    tags: ["AWS Lambda", "GraphQL", "Step Functions"],
    overview:
      "A serverless order-orchestration layer that coordinates inventory, payment, and fulfillment across a fleet of downstream services — engineered to absorb 20x traffic spikes during flash sales without manual intervention.",
    highlights: [
      "Architected an AWS Lambda + Step Functions pipeline that auto-scaled through 20x Black Friday traffic spikes.",
      "Introduced a GraphQL federation layer to unify inventory, pricing, and fulfillment APIs behind one schema.",
      "Implemented saga-based rollback for failed payment/fulfillment steps, removing manual reconciliation.",
      "Held 99.99% checkout availability through three consecutive peak sales events.",
    ],
  },
  {
    slug: "ai-content-pipeline",
    title: "AI Content Pipeline",
    role: "Platform Lead",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",
    stat: { value: "500+", label: "pieces published weekly" },
    description:
      "Automated content generation workflow with LLM orchestration and prompt engineering.",
    tags: ["Python", "OpenAI", "Pinecone"],
    overview:
      "An automated pipeline that turns raw product and research data into publish-ready content — orchestrating retrieval, prompt chaining, and human-in-the-loop review across a growing library of content types.",
    highlights: [
      "Built a retrieval-augmented pipeline on Pinecone, grounding generated content in verified source data.",
      "Orchestrated multi-step prompt chains in Python, reducing manual editing time per piece by 70%.",
      "Added guardrails and a human review queue to keep factual accuracy above 98% before publish.",
      "Scaled the pipeline to produce 500+ pieces of reviewed content per week.",
    ],
  },
];
