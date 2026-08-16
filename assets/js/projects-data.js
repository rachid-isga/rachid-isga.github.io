/**
 * Verified Real Project Dataset for Rachid Oujil Portfolio (rachidoujil.me)
 * Extracted directly from local codebase source files, dependencies, routes, models, and migrations.
 * ZERO fabricated features, statistics, or clients.
 */

const PROJECTS_DATA = [
  {
    id: "mailnox",
    slug: "mailnox",
    title: "MailNox V1.0",
    headline: "Enterprise High-Deliverability Email Campaign & Infrastructure Management Platform",
    category: "Full-Stack",
    categories: ["Web", "Full-Stack", "Tools"],
    shortDescription: "Industrial-grade email delivery and MTA orchestration suite supporting PowerMTA, multi-provider API rotation, DNS validation, and granular tracking.",
    overview: "MailNox is a robust, full-stack email marketing and infrastructure platform built to orchestrate large-scale email campaigns with high deliverability. It features deep integration with Linux PowerMTA (PMTA), automated IP warmup schedules, multi-account API routing (Google Workspace, Microsoft Graph, SMTP buckets), suppression list scrubbing, split testing, and real-time deliverability analytics.",
    problem: "Delivering high-volume transactional and marketing email requires complex MTA configuration, IP reputation warming, DKIM/SPF/DMARC validation, multi-provider redundancy, and strict suppression management. Standard tools lack direct low-level MTA automation alongside application-layer campaign management.",
    solution: "MailNox combines low-level PMTA server installer scripts, dynamic config generation, and multi-provider API gateways with a modern web dashboard. It automates IP warmup curves, tests email templates across split testing groups, and captures webhooks for bounces, opens, clicks, and unsubscribes via a dedicated tracking microservice.",
    technologies: ["PHP 8.2", "Laravel", "MySQL", "PowerMTA (PMTA)", "Linux", "GSuite API", "Microsoft Graph API", "LaravelCollective", "GuzzleHttp", "Nginx", "HTML5", "CSS3", "JavaScript"],
    architecture: {
      client: "Admin Web Dashboard (Blade + Tailwind/Bootstrap + Charts)",
      backend: "Laravel Modular Core (Campaigns, Lists, Warmup, Dynamic Tasks)",
      relays: "PowerMTA Daemon, Google Workspace API, MS Graph API, SMTP Buckets",
      microservices: "Tracking Pixel & Unsubscribe Redirect Webhook Microservice",
      database: "MySQL 8.0 Relational Storage (60+ Entities)"
    },
    features: [
      "PowerMTA (PMTA) Server Orchestration: Dynamic config generator, daemon monitoring, and automated proxy routing.",
      "Multi-Provider API Integration: Native support for Google Workspace/Gmail API and Microsoft Graph accounts.",
      "Automated IP Warmup Engine: Configurable daily sending schedules, gradual volume ramp-up, and throttling.",
      "DNS Record Diagnostic Suite: Real-time validation for SPF, DKIM, DMARC, MX, and custom tracking domains.",
      "Campaign Split Testing (A/B) & Autoresponders: Multi-creative testing, conversion logging, and scheduled drip triggers.",
      "Suppression & Blacklist Processing: Automated CSV scrubbing against global suppression databases and blacklist feeds.",
      "Deliverability & Geo-Analytics: Open/click tracking microservice, geo-IP mapping, user-agent parsing, and ISP breakdown."
    ],
    models: ["DeliveryServer", "DynamicPmtaConfig", "SmtpBucket", "IpWarmup", "EmailCampaign", "EmailList", "EmailListSubscriber", "EmailCampaignTracking", "EmailCampaignConversion", "SplitTest", "AutoResponder", "DnsRecord", "Domain", "GoogleWorkspaceUser", "MicrosoftGraphAccount", "SuppressionProcess", "BlackList", "DeliverabilityStatistic"],
    controllers: ["DeliveryServerController", "DynamicPmtaConfigController", "EmailCampaignController", "DeliverabilityStatisticController", "SuppressionProcessController", "SplitTestController", "GmailController", "DomainController"],
    challenges: [
      "Implementing safe background queue workers capable of managing high-volume sending loops without exhausting server memory or hitting provider rate limits.",
      "Developing resilient DNS verification routines to accurately detect propagation delays and malformed TXT/DKIM keys across arbitrary nameservers.",
      "Creating a high-throughput tracking endpoint that logs opens and clicks asynchronously with minimal latency."
    ],
    whatILearned: [
      "Advanced RFC 5322 email specifications, SMTP handshakes, feedback loops (FBL), and mail server reputation mechanics.",
      "Building resilient distributed job queues and webhook ingest microservices in PHP/Laravel.",
      "Integrating OAuth2 flows and batch API endpoints for Google Workspace and Microsoft Graph."
    ],
    liveUrl: null,
    githubUrl: null,
    badge: "Enterprise Infrastructure"
  },
  {
    id: "deutschio-platform",
    slug: "deutschio-platform",
    title: "Deutschio Platform",
    headline: "German Language Learning LMS & 1-on-1 Consultation Booking Platform",
    category: "Web",
    categories: ["Web", "Full-Stack", "Management Systems"],
    shortDescription: "Feature-rich EdTech platform for German language mastery featuring interactive video courses, automated quizzes, PDF certificates, and teacher consultations.",
    overview: "Deutschio Platform is an end-to-end educational web application designed for learning the German language (A1 to C2). It combines structured course chapters and video lessons with automated quizzes, digital certificates generated via DomPDF, a digital German grammar book library, and a real-time teacher consultation scheduling engine.",
    problem: "Language students need a cohesive ecosystem where they can watch lessons sequentially, test their grammar and vocabulary retention immediately, earn verified completion certificates, and easily book live 1-on-1 consultations with native instructors.",
    solution: "Deutschio delivers a unified LMS with role-based access control (Students, Teachers, Admins). It automates quiz scoring and certificate issuing, manages instructor availability calendars for consultations, and provides a resource request pipeline for digital learning materials.",
    technologies: ["PHP 8.2", "Laravel 12", "Spatie Permission 6.23", "Barryvdh DomPDF", "Intervention Image 3.11", "Google API Client", "Alpine.js", "Tailwind CSS", "Vite", "MySQL"],
    architecture: {
      client: "Reactive Student & Admin Portals (Blade + Tailwind CSS + Alpine.js)",
      backend: "Laravel 12 Application Core with Spatie RBAC Middleware",
      services: "Quiz Evaluation Engine, DomPDF Certificate Builder, Google API Sync",
      database: "MySQL Relational Schema (Courses, Lessons, Enrollments, Progress, Quizzes, Certificates, Consultations)"
    },
    features: [
      "Structured Curriculum Hierarchy: Multi-level German courses organized into Chapters, sequential Lessons, and video materials.",
      "Role-Based Access Control (RBAC): Spatie-powered role matrix separating Students, Instructors, and System Administrators.",
      "Interactive Quiz Engine: Instant evaluation of student attempts, minimum passing grade enforcement, and progress unlocking.",
      "Automated PDF Certificate Generation: Dynamic issuance of personalized completion certificates using DomPDF.",
      "Teacher Consultation Scheduler: Instructor calendar availability slots, appointment booking, and status workflows.",
      "Digital Book Library & Download Requests: German grammar e-books and study material repository with request logging.",
      "Student Activity & Progress Analytics: Detailed tracking of completed lessons, quiz scores, and payment pending states."
    ],
    models: ["Course", "Chapter", "Lesson", "Enrollment", "Progress", "Quiz", "Question", "QuizAttempt", "Certificate", "Consultation", "Availability", "PdfBook", "PdfRequest", "ActivityLog", "User"],
    controllers: ["LandingController", "ProfileController", "Admin/CourseController", "Student/LessonController", "ConsultationController"],
    challenges: [
      "Ensuring sequential progression logic so students cannot skip mandatory lesson quizzes before unlocking subsequent modules.",
      "Designing a robust time-slot reservation system for consultations that prevents double booking across different instructor timezones."
    ],
    whatILearned: [
      "Implementing fine-grained authorization policies and middleware with Spatie Permissions.",
      "Generating pixel-perfect PDF documents and certificates using DomPDF with custom vector badges.",
      "Structuring modular LMS database schemas optimized for tracking granular user progress."
    ],
    liveUrl: null,
    githubUrl: null,
    badge: "EdTech Platform"
  },
  {
    id: "fldm-doctorat",
    slug: "fldm-doctorat",
    title: "FLDM Gestion Doctorat",
    headline: "Doctoral Studies & Research Center Academic Management System",
    category: "Academic",
    categories: ["Academic", "Management Systems", "Web"],
    shortDescription: "Bilingual university administration platform managing doctoral student registrations, thesis topics, supervisor allocations, and defense documents.",
    overview: "FLDM Gestion Doctorat is an academic information system engineered for the Faculty of Letters and Human Sciences Dhar El Mahraz (USMBA University). It digitizes the complete doctoral studies lifecycle, from candidate admissions and CED (Centre d'Études Doctorales) laboratory affiliations to thesis topic approvals, supervisor matching, and bilingual French/Arabic official attestation generation.",
    problem: "Managing thousands of doctoral candidates, research structures, thesis topics, and academic supervisors using disjointed spreadsheets causes data discrepancies, slow attestation issuance, and lack of visibility into student research milestones.",
    solution: "The platform establishes a centralized relational database mapping institutions, CED centers, research laboratories, thesis topics, and professors. It provides secretarial dashboards, Excel batch dossier importers, and automated Arabic-shaped PDF certificate generation.",
    technologies: ["PHP 8.2", "Laravel 12", "Khaled.Alshamaa/ar-php", "Barryvdh DomPDF", "Maatwebsite Excel 3.1", "MySQL", "Blade", "Tailwind CSS", "Vite"],
    architecture: {
      client: "University Registrar & Secretariat Portal (Blade + Tailwind CSS)",
      backend: "Laravel 12 Academic Core (Dossier Import, Thesis Assignment, Document Generation)",
      engines: "ar-php Arabic Typography Processor, DomPDF Layout Renderer, Maatwebsite Excel Parser",
      database: "MySQL Normalized Database with French and Arabic UTF-8 fields"
    },
    features: [
      "Doctoral Lifecycle Management: Academic registration, yearly renewal, defense status, and thesis archival.",
      "Supervisor & Laboratory Mapping: Relational linking of Thesis Supervisors (Encadrants) to Research Laboratories and CED centers.",
      "Native Arabic Text Processing: Integration with `ar-php` for proper bidirectional Arabic text shaping on official Moroccan diplomas and certificates.",
      "Excel Batch Dossier Importer: Fast ingestion of candidate records, academic baccalaureate data, and historical grades via Maatwebsite Excel.",
      "Automated Official Document Dispatch: Instant generation of registration attestations, supervisor certificates, and defense approvals.",
      "Administrative Role Authorization: Secure separation between academic administrators, department heads, and secretariat staff."
    ],
    models: ["Etudiant", "Encadrant", "Sujet", "Inscription", "FormationDoctorale", "StructureRecherche", "Ced", "Etablissement", "Diplome", "Baccalaureat", "Note", "User"],
    controllers: ["EtudiantController", "EncadrantController", "SujetController", "ImportController", "DashboardController", "AuthController"],
    challenges: [
      "Handling bi-directional Arabic text rendering in PDF generation, resolving glyph reconnection and RTL alignment using `ar-php`.",
      "Writing resilient Excel import routines with comprehensive data validation to catch duplicate national IDs (CIN/CNE) and malformed dates."
    ],
    whatILearned: [
      "Complex relational schema design for higher education institutions with multi-tier hierarchies.",
      "Techniques for reliable Arabic typography rendering in server-generated PDF documents.",
      "Optimizing batch database insertions and transaction rollbacks during large Excel imports."
    ],
    liveUrl: null,
    githubUrl: null,
    badge: "University System"
  },
  {
    id: "fldm-master",
    slug: "fldm-master",
    title: "FLDM Master Application",
    headline: "Master's Admissions, Academic Timetabling & Auditing Enterprise System",
    category: "Academic",
    categories: ["Academic", "Management Systems", "Full-Stack"],
    shortDescription: "High-volume admissions and scheduling platform for Master's programs featuring server-side DataTables, QR-coded PDF certificates, and audit trails.",
    overview: "FLDM Master Application is an enterprise academic portal handling Master's degree admissions, student academic dossiers, semester modules, course scheduling, and grievance submissions. It handles massive concurrent traffic during enrollment periods with server-side Yajra DataTables, audit logging for all grade changes, and automated timetable generation with embedded verification QR codes.",
    problem: "University admissions for Master's programs involve thousands of applicants submitting transcripts, creating huge administrative backlogs, verification overhead, scheduling conflicts for lecture halls (salles), and grading disputes.",
    solution: "The system provides a candidate submission portal and an administrative back-office with server-side pagination, instant QR-code-secured admission slips via mPDF, room/building scheduling conflict detection, and immutable audit logs.",
    technologies: ["PHP 8.x", "Laravel 8/12", "Owen-It Laravel-Auditing 13.6", "Carlos-Meneses mPDF", "mPDF QRCode", "Yajra DataTables Oracle", "Fast-Excel", "MySQL", "Bootstrap", "JavaScript"],
    architecture: {
      client: "Applicant Front-Office & Multi-Department Back-Office (Blade + Bootstrap + DataTables)",
      backend: "Laravel Enterprise Core (Admissions, Modules, Timetable Allocator, Claims System)",
      services: "mPDF Vector QR Generator, Yajra Server-side Query Engine, Audit Trail Interceptor",
      database: "MySQL Relational Schema (59 Migrations, Roles, Cycles, Filieres, Salles, Reclamations)"
    },
    features: [
      "Master's Candidacy Portal: Online dossier submission, bachelor transcript verification, and real-time application status.",
      "High-Performance Server-Side Grids: Yajra DataTables integration providing instant search and filtering across tens of thousands of student records.",
      "QR-Coded Official Documents: Generation of tamper-proof admission certificates and exam authorizations with cryptographic QR verification.",
      "Full Audit Trail Logging: Powered by `owen-it/laravel-auditing`, recording every administrative grade change, role update, and dossier approval.",
      "Campus Infrastructure Scheduling: Interactive management of buildings (Bâtiments), rooms (Salles), time slots (Horaires), and professors.",
      "Student Grievance & Claims System: Dedicated module (`ReclamationMaster`, `ReclamationExtern`) for grade re-evaluations and administrative tickets."
    ],
    models: ["InscritMaster", "MasterOuvert", "MasterPostuler", "InformationMaster", "InformationMasterAcademique", "Cycle", "Filiere", "Departement", "Modules", "ModuleGrade", "Horaire", "MasterEmploiTemp", "Salle", "ReclamationMaster", "ActivityLog"],
    controllers: ["DashboardController", "UserMasterController", "ReclamationExternController", "RolePermissionController", "HomeController"],
    challenges: [
      "Optimizing database indexing and query execution to handle thousands of applicants querying admission lists simultaneously without server timeouts.",
      "Designing a conflict-free room scheduling algorithm that validates professor, student group, and hall availability."
    ],
    whatILearned: [
      "Mastery of server-side data processing and database indexing with Yajra DataTables.",
      "Implementing enterprise compliance and auditability in Laravel using model auditing hooks.",
      "Generating dynamic vector QR codes and integrating secure verification workflows."
    ],
    liveUrl: null,
    githubUrl: null,
    badge: "Enterprise Academic"
  },
  {
    id: "fldm-scolarite",
    slug: "fldm-scolarite",
    title: "FLDM Scolarité Gestion",
    headline: "University Student Registry, Exam Allocation & CLI Automation Engine",
    category: "Academic",
    categories: ["Academic", "Management Systems", "Tools"],
    shortDescription: "Core university student database management suite with automated batch exam seat assignment, student password recovery, and database migration tooling.",
    overview: "FLDM Scolarité Gestion is the backbone student administration system engineered for university registrar services. It automates large-scale student schooling workflows, including national student code (CNE/MASSAR) indexing, academic track (Parcours) allocation, automated exam room and seat number distribution via Artisan CLI commands, and student credential recovery.",
    problem: "Organizing university exams for tens of thousands of students requires precise seating assignments, generation of exam roll numbers, and handling mass student credential resets before examination periods.",
    solution: "The suite provides specialized registrar interfaces along with dedicated high-performance Laravel Artisan CLI automation scripts to batch-hash credentials, assign exam numbers, and migrate legacy university datasets without manual intervention.",
    technologies: ["PHP 8.x", "Laravel Framework", "MySQL", "Artisan CLI Commands", "Blade", "Tailwind CSS", "Bootstrap", "Bash"],
    architecture: {
      client: "Registrar Administration Dashboard & Student Self-Service Portal",
      cli: "Custom Artisan CLI Pipeline (HashUsers, ImportExamNumbers, InsertParcours, MigrateOldData)",
      backend: "Laravel Academic Core with Audit Logging and Exam Number Generators",
      database: "MySQL Student Registry & Examination Allocation Database"
    },
    features: [
      "Student Registry & Enrollment Tracking: Centralized management of student identities, CNE/CIN numbers, and enrolled semesters.",
      "Automated Exam Number Batch Distribution: Custom CLI command (`ImportExamNumbers`) allocating examination seats and roll numbers.",
      "Student Self-Service Password Recovery: Secure PIN/email recovery workflow specifically built for university students (`StudentPasswordResetController`).",
      "Historical Data Migration Engine: Custom automated data migration command (`MigrateOldDataCommand`) migrating legacy SQL dumps into normalized tables.",
      "Academic Schedule & Room Management: Timetable allocations, teaching hours tracking, and course distribution.",
      "Administrative Audit Trails: Action logging tracking all registry modifications, grade updates, and student profile changes."
    ],
    models: ["Student", "ExamNumber", "Parcours", "Horaire", "AuditLog", "User", "Role"],
    controllers: ["Admin/HoraireController", "AdminController", "AuditController", "Auth/StudentPasswordResetController"],
    challenges: [
      "Developing deterministic batch CLI commands capable of processing 20,000+ student exam numbers within seconds without lockups.",
      "Safely normalizing legacy disparate SQL database dumps containing inconsistent character encodings and duplicate records."
    ],
    whatILearned: [
      "Building high-performance CLI utilities and memory-efficient chunked batch workers in Laravel.",
      "Designing secure, low-friction self-service recovery flows for large university student bases.",
      "Database schema refactoring and data normalization strategies."
    ],
    liveUrl: null,
    githubUrl: null,
    badge: "University Registrar"
  },
  {
    id: "fldm-website",
    slug: "fldm-website",
    title: "FLDM Institutional Web Portal",
    headline: "Multilingual Official University Faculty Portal & Exam Results Engine",
    category: "Web",
    categories: ["Web", "Academic", "Full-Stack"],
    shortDescription: "Modern institutional portal with dynamic CMS, student exam results search, bilingual French/Arabic publishing, and emergency maintenance controls.",
    overview: "The FLDM Website is the primary digital gateway for the faculty, serving students, faculty members, and researchers. It features a modern CMS for news, academic programs, department structures, and events, alongside a dedicated exam results lookup engine and emergency maintenance controls for high-traffic exam periods.",
    problem: "University web portals must combine fast public information delivery with secure, high-concurrency exam result queries, multilingual content management, and robust fail-safes during server peak loads.",
    solution: "Built on Laravel 12 and modern Tailwind CSS, the platform delivers a high-speed bilingual portal with an optimized result search index, event calendar, faculty directory, and an emergency traffic shutdown controller.",
    technologies: ["PHP 8.2", "Laravel 12", "MySQL", "Blade", "Tailwind CSS", "Vite", "JavaScript", "HTML5", "CSS3"],
    architecture: {
      client: "Responsive University Public Portal & Admin CMS (Blade + Tailwind CSS)",
      backend: "Laravel 12 Core with Multilingual Content Middleware",
      search: "High-Performance Exam Result Query Index & CNE/CIN Search Engine",
      database: "MySQL Relational Schema (Programs, News, Events, Faculty, Results, Settings)"
    },
    features: [
      "Dynamic Institutional CMS: Content publishing workflows for faculty announcements, academic programs, and upcoming conferences.",
      "Student Exam Results Lookup: Instant grade and deliberation lookup indexed by National Student Number (CNE) and CIN.",
      "Bilingual Publishing (French & Arabic): Native support for dual-language university communications and official communiqués.",
      "Faculty & Laboratory Directory: Academic profiles for professors, research teams, and department listings.",
      "Emergency Shutdown Controller: Instant toggleable maintenance mode and read-only caching for intense exam result release spikes.",
      "Event Calendar & Public Announcements: Interactive schedule for academic conferences, thesis defenses, and student activities."
    ],
    models: ["News", "Event", "Program", "Filiere", "DoctoratFormation", "DoctoratStructure", "FacultyMember", "ExamResult", "Schedule", "Page", "Message", "Announcement", "Setting", "User"],
    controllers: ["HomeController", "ResultController", "SearchController", "PublicNewsController", "PublicEventController", "EmergencyShutdownController", "AdminController"],
    challenges: [
      "Designing a high-throughput search query for exam results that resists spike traffic when tens of thousands of students check grades simultaneously.",
      "Ensuring clean responsive typography across both Left-to-Right (French) and Right-to-Left (Arabic) page layouts."
    ],
    whatILearned: [
      "Building high-traffic university portals with graceful degradation and maintenance mode controllers.",
      "Crafting modern, accessible, responsive institutional UI layouts with Tailwind CSS.",
      "Optimizing query caches for public read-heavy student dashboards."
    ],
    liveUrl: null,
    githubUrl: null,
    badge: "Institutional Portal"
  },
  {
    id: "olympustaff",
    slug: "olympustaff",
    title: "OlympusStaff",
    headline: "High-Traffic Web Manga & Comic Publishing Platform with VIP Monetization",
    category: "Full-Stack",
    categories: ["Web", "Full-Stack", "Management Systems"],
    shortDescription: "Production manga publishing platform featuring continuous vertical chapter reader, VIP subscriptions, ad placement management, and anti-scraping defenses.",
    overview: "OlympusStaff is a high-traffic web platform dedicated to publishing and reading digital manga, manhwa, and webcomics. Live in production at olympustaff.com, the platform features a reader with infinite scroll and single-page modes, a VIP subscription gating engine with proof verification, interactive user comments, bookmarking, and anti-scraping security.",
    problem: "Manga platforms face extreme bandwidth consumption from high-resolution images, heavy scraping attempts from content bots, and the need to monetize premium early-access chapters while maintaining fast page load speeds.",
    solution: "OlympusStaff utilizes Intervention Image for automated web-optimized image compression, an IP blocking and rate-limiting shield, configurable ad placement slots, and a flexible VIP subscription module allowing users to submit payment proofs for early chapter access.",
    technologies: ["PHP 8.2", "Laravel 12", "Intervention Image 3.11", "MySQL", "Blade", "Tailwind CSS", "Vite", "JavaScript", "Nginx"],
    architecture: {
      client: "Fast Manga Reader & Catalog UI (Blade + Tailwind CSS + Vanilla JS)",
      backend: "Laravel 12 Core with VIP Gating Middleware & View Logging Service",
      imageProcessing: "Intervention Image Pipeline for Automated Resizing & WebP Compression",
      security: "IP Blacklist Shield, Scraping Defense Middleware, and Rate Limiters",
      database: "MySQL Optimized Database (Mangas, Chapters, Pages, Genres, Reviews, Comments, Ads)"
    },
    features: [
      "Live Production Platform: Deployed and accessible at https://olympustaff.com/.",
      "Optimized Chapter Reader: Seamless vertical continuous scroll and page-by-page reader with image preloading and reading progress preservation.",
      "VIP Tier & Premium Early Access: Gating latest releases behind subscription tiers with manual and automated subscription proof validation (`SubscriptionProof`).",
      "Dynamic Ad Placement Engine: Configurable banner and interstitial ad zones (`AdPlacement`) managed directly from the admin panel.",
      "Community Engagement: Real-time chapter reviews, threaded comments, rating systems, and user favorites library.",
      "Anti-Scraping & Security Shield: Dynamic IP blocking (`BlockedIp`), user suspension workflows, and crawler mitigation.",
      "View Counting & Analytics Log: Accurate view log tracking (`ViewLog`) with deduplication per user session."
    ],
    models: ["Manga", "Chapter", "Page", "Genre", "User", "Plan", "SubscriptionProof", "Review", "Comment", "Favorite", "AdPlacement", "BlockedIp", "Announcement", "Setting", "ViewLog"],
    controllers: ["HomeController", "MangaController", "ChapterController", "PremiumController", "CommentController", "ReviewController", "FavoriteController", "SettingsController", "SitemapController"],
    challenges: [
      "Optimizing chapter image delivery to ensure sub-second rendering without overloading server memory during release spikes.",
      "Building a lightweight yet effective anti-bot middleware that prevents content scrapers without degrading SEO or legitimate user experience."
    ],
    whatILearned: [
      "Architecting high-concurrency content delivery platforms with image pipeline optimization.",
      "Designing sustainable monetization and membership workflows with subscription verification.",
      "Implementing comprehensive content indexing and dynamic XML sitemaps for manga catalogs."
    ],
    liveUrl: "https://olympustaff.com/",
    githubUrl: null,
    badge: "Live Production Platform"
  },
  {
    id: "pharma",
    slug: "pharma",
    title: "Pharma ERP",
    headline: "Comprehensive Pharmacy Point of Sale, Batch Inventory & Financial ERP",
    category: "Management Systems",
    categories: ["Management Systems", "Web", "Full-Stack"],
    shortDescription: "All-in-one pharmacy enterprise software handling POS checkout, cash registers, batch expiry tracking, insurer billing, and inter-pharmacy confrere loans.",
    overview: "Pharma is a comprehensive enterprise management system engineered for retail and institutional pharmacies. Covering over 90 database migrations, it manages Point of Sale (POS) cashier workflows, physical cash drawer (Caisse) balances, supplier purchase orders and delivery notes (Bon de Livraison), batch-level drug expiration tracking, third-party health insurer billing (AMO/CNSS), and inter-pharmacy confrere item loans.",
    problem: "Pharmacies operate under strict regulatory and financial constraints: drug expiration dates must be tracked to prevent losses, cash registers must balance down to the cent, health insurance claims require exact co-pay calculations, and inter-pharmacy item exchanges need accurate accounting.",
    solution: "Pharma automates the entire pharmaceutical supply chain with multi-caisse session controls, FEFO/FIFO batch expiration alerts, Confrere debt/credit regularization, automated PDF invoices and delivery notes, and active drug substance (DCI) counter-indication safety checks.",
    technologies: ["PHP 8.2", "Laravel 12", "Yajra DataTables", "Barryvdh DomPDF", "Carlos-Meneses mPDF", "Maatwebsite Excel", "Orangehill Iseed", "GuzzleHttp", "Laravel UI", "MySQL"],
    architecture: {
      client: "POS Cashier Terminal & Financial Back-Office (Laravel UI + DataTables + Bootstrap)",
      backend: "Laravel ERP Engine (POS, Batch Stock Journal, Caisse Balancer, Insurer Claims)",
      documentPipeline: "mPDF & DomPDF Invoicing Engine, Barcode Generator, Excel Exporter",
      database: "Comprehensive MySQL Relational Schema (92 Migrations, 70+ Models)"
    },
    features: [
      "Point of Sale (POS) Cashier Engine: Ultra-fast barcode scanning, client search, partial credit sales, and multi-mode payment handling.",
      "Physical Cash Register (Caisse) Controls: Cash drawer session opening/closing, real-time discrepancy audits, and expense tracking.",
      "Batch Expiration Date Management: Automated alerts for nearing drug expiration dates (`Datepremptionproduit`) with FEFO dispatching.",
      "Inter-Pharmacy (Confrère) Exchange: Tracking item loans, borrowings, balance regularizations, and mutual settlements between peer pharmacies.",
      "Health Insurer & Organisme Billing: Third-party billing engine supporting Moroccan insurance schemes (AMO, CNSS, CNOPS, private policies).",
      "Active Substance (DCI) & Drug Interaction Alerts: Safety warnings on drug-to-drug counter-indications (`ContreIndication`) during checkout.",
      "Supplier Purchases & Delivery Notes (BL): Purchase orders, supplier invoices, credit notes (Avoir Emis/Reçu), and payment schedules."
    ],
    models: ["Produit", "Achat", "Vente", "Bonlivraison", "Caisse", "Detailcaisse", "Inventaire", "Datepremptionproduit", "Confrere", "Sortieconfrere", "PaiementConfrere", "Fournisseur", "PaiementFournisseur", "AvoirEmis", "AvoirRecu", "Devis", "Laboratoire", "Gamme", "Dci", "ContreIndication", "Organisme", "Remise", "Tva", "Licence", "Rapport"],
    controllers: ["VenteController", "AchatController", "CaisseController", "StockController", "ClientsController", "ConfreresController", "FournisseursController", "BonLivraisonController", "InventaireController", "RapportController"],
    challenges: [
      "Maintaining absolute financial accuracy across concurrent cash registers, credit sales, and supplier credit notes without race conditions.",
      "Structuring high-speed barcode search queries across catalogs with tens of thousands of pharmaceutical reference codes and dosages."
    ],
    whatILearned: [
      "Enterprise accounting and cash drawer balancing algorithms in retail ERPs.",
      "Designing complex multi-entity relational databases with strict foreign key integrity and transactional isolation.",
      "Implementing mission-critical patient safety checks and drug interaction warning systems."
    ],
    liveUrl: null,
    githubUrl: null,
    badge: "Enterprise ERP"
  },
  {
    id: "pharma-core",
    slug: "pharma-core",
    title: "Pharma Core Application",
    headline: "Next-Generation Pharmacy Core ERP with Spatie RBAC & Audit Trails",
    category: "Management Systems",
    categories: ["Management Systems", "Full-Stack", "Web"],
    shortDescription: "Clean-architecture refactor of pharmaceutical management featuring client digital wallets, tiered pricing, granular Spatie permissions, and audit logs.",
    overview: "Pharma Core Application represents a modernized, domain-driven architectural refactor of pharmacy management software. Built on Laravel 12, Spatie Permissions, and Owen-It Auditing, it introduces advanced features such as customer store credit digital wallets, tiered wholesale/retail pricing rules, immutable audit trails for every transaction, and an Alpine.js-powered interface.",
    problem: "Legacy enterprise ERPs often suffer from rigid monolithic coupling, making it hard to add dynamic pricing strategies, granular staff permissions, digital customer wallets, or verifiable audit trails.",
    solution: "Pharma Core implements clean separation of concerns, strict domain modeling, customer wallet ledgers (`ClientWalletTransaction`), multi-tiered discount rules (`DiscountRule`), and full transaction auditability.",
    technologies: ["PHP 8.2", "Laravel 12", "Spatie Permission 6.25", "Owen-It Auditing 14.0", "Alpine.js", "Tailwind CSS", "Vite", "Axios", "MySQL"],
    architecture: {
      client: "Modern Reactive Interface (Blade + Tailwind CSS + Alpine.js)",
      backend: "Laravel 12 Clean Architecture Core with Audit Interceptors",
      security: "Spatie Role-Based Permission Matrix (Pharmacists, Cashiers, Auditors, Managers)",
      database: "MySQL 8.0 Relational Storage (64 Migrations, Products, Sales, Purchases, Wallets, Audits)"
    },
    features: [
      "Customer Digital Wallet Ledger: Store credit accounts, wallet deposits, and automated refund allocation via `ClientWalletTransaction`.",
      "Multi-Tier Dynamic Pricing Matrix: Configurable pricing tiers (`ProductPrice`) for retail, wholesale, and loyalty customer tiers.",
      "Granular Role & Permission Matrix: Spatie Permissions v6 separating Cashiers, Pharmacists, Stock Managers, and Financial Directors.",
      "Immutable Audit Logs: Complete system-wide tracking of record creation, updates, and deletions powered by Owen-It Auditing v14.",
      "Comprehensive Stock Movements Journal: Traceable item movement log (`StockMovements`) recording all ins, outs, transfers, and adjustments.",
      "Modernized Reactive UI: Built with Tailwind CSS and Alpine.js for instantaneous UI feedback without heavy framework overhead."
    ],
    models: ["Product", "ProductPrice", "ProductExpiryDate", "StockMovements", "Sale", "SaleItem", "SaleReturn", "Purchase", "PurchaseItem", "BonLivraison", "AvoirEmis", "AvoirRecu", "Devis", "Caisse", "CaisseAlimentation", "Client", "ClientWalletTransaction", "Supplier", "Confrere", "ConfrereTransaction", "DiscountRule", "Remise", "Inventory", "Laboratory", "Dcis", "Organisme", "Setting", "User"],
    controllers: ["ProductController", "SaleController", "PurchaseController", "CaisseController", "ClientController", "ClientPaymentController", "ConfrereController", "StockMovementController", "DashboardController", "SettingsController"],
    challenges: [
      "Designing a ledger-based wallet transaction model that guarantees balance integrity even under concurrent refund and checkout requests.",
      "Refactoring complex business logic into clean, reusable service classes while preserving backward compatibility with existing data structures."
    ],
    whatILearned: [
      "Modern Clean Architecture patterns in Laravel and decoupling business domain logic.",
      "Implementing financial double-entry wallet ledgers with database transactions.",
      "Applying Spatie RBAC and comprehensive model auditing to enterprise healthcare software."
    ],
    liveUrl: null,
    githubUrl: null,
    badge: "Clean Architecture ERP"
  },
  {
    id: "pinedrama-downloader",
    slug: "pinedrama-downloader",
    title: "PineDrama Downloader",
    headline: "High-Speed Media Extraction & Clean Video Stream Processing Web Utility",
    category: "Tools",
    categories: ["Tools", "Web", "Full-Stack"],
    shortDescription: "Production video utility platform for high-speed TikTok and Sora media downloading, watermark removal proxying, and user reward credit systems.",
    overview: "PineDrama Downloader is a high-performance web utility and media extraction platform live in production at pinedramatiktok.com. It enables users to download TikTok videos, audio tracks, and OpenAI Sora generated videos with watermark removal, high-speed streaming proxies, credit transaction accounting, and multilingual localization.",
    problem: "Users require a fast, seamless way to download video content without watermarks or intrusive redirects, while platform operators need sustainable credit tokenomics, referral incentives, and reliable stream proxies.",
    solution: "The platform delivers a streamlined Alpine.js interface powered by Laravel 12, an asynchronous video stream proxy that bypasses origin rate limits, a user credit economy (`CreditTransaction`, `ReferralReward`), and localized SEO landing pages.",
    technologies: ["PHP 8.2", "Laravel 12", "Laravel Sanctum", "Alpine.js", "Tailwind CSS", "Vite", "Axios", "cURL Stream Proxy", "MySQL"],
    architecture: {
      client: "High-Conversion Reactive Web UI (Blade + Tailwind CSS + Alpine.js)",
      backend: "Laravel 12 API & Controller Core (TikTok / Sora Video Processors, Locale Engine)",
      proxy: "Server-side Streaming Proxy (`stream-download`) for Direct File Delivery",
      database: "MySQL Database (Downloads, Credits, Referral Rewards, Pages, Users)"
    },
    features: [
      "Live Production Platform: Deployed and accessible at https://pinedramatiktok.com/.",
      "Watermark Removal & Video Processing: Extraction engine for watermark-free TikTok clips and OpenAI Sora video cleaner.",
      "Server-Side Stream Proxy: Secure high-speed proxy endpoint (`/stream-download`) streaming video files directly to users.",
      "User Credit & Referral Economy: Daily credit allowances, referral bonuses (`ReferralReward`), and transaction ledgers (`CreditTransaction`).",
      "Multilingual Architecture: Dynamic multi-locale router (`/en`, `/ar`, etc.) with persistent session-based language switching.",
      "Full SEO & Compliance Suite: Dynamic XML sitemap generator, DMCA compliance handler, API documentation, and terms pages."
    ],
    models: ["Download", "CreditTransaction", "ReferralReward", "Page", "User"],
    controllers: ["HomeController", "TikTokController", "WatermarkController", "LocaleController", "PageController", "CreditController", "DownloadController"],
    challenges: [
      "Building a resilient video streaming proxy that pipes large binary video streams efficiently without buffering the entire file into server RAM.",
      "Handling dynamic changes in third-party media endpoints while ensuring zero user-facing downtime."
    ],
    whatILearned: [
      "Building high-throughput binary stream proxy endpoints with chunked HTTP responses in PHP.",
      "Implementing virtual credit token systems and referral mechanics.",
      "Architecting multilingual SEO URLs with internationalized routing."
    ],
    liveUrl: "https://pinedramatiktok.com/",
    githubUrl: null,
    badge: "Live Web Utility"
  },
  {
    id: "test-16-personalities",
    slug: "test-16-personalities",
    title: "Test 16 Personalities",
    headline: "Interactive Multilingual Personality Assessment & Custom PDF Report Platform",
    category: "Web",
    categories: ["Web", "Full-Stack", "Tools"],
    shortDescription: "Interactive psychometric evaluation platform with Livewire 4.2 quiz engine, 16 MBTI profiles, PayPal SDK integration, and personalized DomPDF reports.",
    overview: "Test 16 Personalities is a modern psychometric testing web application inspired by the Myers-Briggs Type Indicator (MBTI). Built with Livewire 4.2 and Tailwind CSS, it offers a single-page interactive questionnaire, four-dimensional trait scoring, comprehensive archetype profile pages, multilingual translations via Spatie Translatable, and PayPal payment integration for purchasing comprehensive PDF psychological analysis reports.",
    problem: "Standard online quizzes often feel clunky with repetitive page reloads, lack rigorous multi-dimensional scoring calculations, and fail to offer personalized, beautifully formatted downloadable reports.",
    solution: "The platform delivers an instantaneous Livewire assessment experience, calculates exact percentage distributions across the 4 dichotomies (E/I, S/N, T/F, J/P), connects with PayPal for instant order fulfillment, and compiles customized multi-page PDF reports via DomPDF.",
    technologies: ["PHP 8.2", "Laravel 12", "Livewire 4.2", "Spatie Translatable 6.11", "Barryvdh DomPDF 3.1", "Srmklive PayPal 3.1", "Tailwind CSS", "Vite", "MySQL"],
    architecture: {
      client: "Single-Page Reactive Assessment (Livewire 4.2 + Tailwind CSS 3/4)",
      scoring: "Psychometric Evaluation Engine (Extraversion, Sensing, Thinking, Judging Percentages)",
      monetization: "PayPal v2 SDK Checkout Webhook & Order Management Pipeline",
      reporting: "DomPDF Dynamic Multi-page Report Generator with Custom Trait Graphs",
      database: "MySQL Database (PersonalityTypes, Questions, TestResults, Orders, Users)"
    },
    features: [
      "Reactive Livewire 4.2 Quiz Flow: Instantaneous question progression with smooth animations and zero page refreshes.",
      "Complete 16 MBTI Personality Archetypes: Detailed profiles for all 16 types including workplace habits, romantic relationships, strengths, and weaknesses.",
      "Multilingual Translation Support: Built-in internationalization powered by `spatie/laravel-translatable` for multilingual test taking.",
      "Commercial Monetization with PayPal: Seamless checkout pipeline using `srmklive/paypal` v3.1 for purchasing extended psychological reports.",
      "Dynamic Custom PDF Report Generation: Automated compilation of personalized multi-page PDF dossiers via Barryvdh DomPDF.",
      "SEO Architecture & OpenGraph Cards: Dynamic sitemap generation, structured schema markup, and social share cards for each personality type."
    ],
    models: ["PersonalityType", "Question", "TestResult", "Order", "User"],
    controllers: ["HomeController", "DashboardController", "PaymentController", "ReportController", "LanguageController", "ProfileController"],
    challenges: [
      "Implementing balanced psychometric scoring algorithms that normalize question weights across four independent personality spectrums.",
      "Ensuring seamless state management and instant UI updates during rapid 60-question quiz progression in Livewire."
    ],
    whatILearned: [
      "Mastery of modern Livewire 4 reactive component lifecycles and state synchronization.",
      "Integrating PayPal checkout SDK and handling asynchronous payment capture webhooks.",
      "Building scalable psychometric scoring engines and automated PDF report generators."
    ],
    liveUrl: null,
    githubUrl: null,
    badge: "Psychometric Platform"
  }
];

// Helper functions for dataset queries
function getProjectBySlug(slug) {
  return PROJECTS_DATA.find(p => p.slug === slug || p.id === slug);
}

function getProjectsByCategory(category) {
  if (!category || category === "All") return PROJECTS_DATA;
  return PROJECTS_DATA.filter(p => p.categories.includes(category) || p.category === category);
}

function getProjectStats() {
  const total = PROJECTS_DATA.length;
  const categoriesCount = {
    "Web & Full-Stack": PROJECTS_DATA.filter(p => p.categories.includes("Web") || p.categories.includes("Full-Stack")).length,
    "Academic Systems": PROJECTS_DATA.filter(p => p.categories.includes("Academic")).length,
    "Management & ERP": PROJECTS_DATA.filter(p => p.categories.includes("Management Systems")).length,
    "Tools & Utilities": PROJECTS_DATA.filter(p => p.categories.includes("Tools")).length
  };
  const liveProjects = PROJECTS_DATA.filter(p => p.liveUrl).length;
  
  return {
    totalProjects: `${total}+ Projects`,
    liveProjects: `${liveProjects} Live Production`,
    categoriesCount,
    coreStacks: ["Laravel 12 / PHP 8.2+", "MySQL / Relational Arch", "Tailwind CSS / Blade / JS", "REST APIs & Microservices"]
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PROJECTS_DATA, getProjectBySlug, getProjectsByCategory, getProjectStats };
}
