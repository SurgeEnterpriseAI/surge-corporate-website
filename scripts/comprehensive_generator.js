// comprehensive_generator.js – creates all pages with COMPLETE navigation + UNIQUE CONTENT
const fs = require('fs');
const path = require('path');

// 1. Navigation HTML (Shared)
const navHTML = `<header>
    <nav>
      <div class="logo">
        <a href="index.html" style="display: flex; align-items: center; gap: 15px; text-decoration: none;">
          <img src="assets/images/lotus_icon_transparent.png" alt="Surge Lotus" style="height: 55px;">
          <div style="display: flex; flex-direction: column; justify-content: center;">
            <span style="font-family: 'Inter', sans-serif; font-weight: 800; font-size: 2rem; color: #f8fafc; letter-spacing: 0.5px; line-height: 1;">SURGE</span>
            <span style="font-family: 'Inter', sans-serif; font-weight: 600; font-size: 0.65rem; color: #bdc5e1; letter-spacing: 1px; text-transform: uppercase; margin-top: 2px;">Software Solutions Pvt Ltd</span>
          </div>
        </a>
      </div>
      
      <button class="mobile-toggle" aria-label="Toggle navigation">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <div class="menu">
        <a href="index.html">Home</a>
        
        <!-- Adobe Technologies Dropdown -->
        <div class="dropdown">
          <a href="#" class="dropdown-toggle">Adobe Technologies</a>
          <div class="dropdown-menu">
            <div class="dropdown-menu-columns">
              <div class="dropdown-column">
                <h4>Adobe Experience Manager</h4>
                <a href="aem-sites.html">AEM Sites</a>
                <a href="aem-forms.html">AEM Forms</a>
                <a href="aem-spa.html">AEM SPA</a>
                <a href="aem-headless.html">AEM Headless</a>
                <a href="aem-assets.html">AEM Assets</a>
                <a href="aem-as-cs.html">AEM As CS</a>
              </div>
              <div class="dropdown-column">
                <h4>Adobe Marketing Cloud</h4>
                <a href="adobe-analytics.html">Adobe Analytics</a>
                <a href="adobe-target.html">Adobe Target</a>
                <a href="adobe-campaign.html">Adobe Campaign</a>
                <a href="adobe-sensai.html">Adobe Sensai</a>
              </div>
              <div class="dropdown-column">
                <h4>Adobe Experience Platform</h4>
                <a href="aep-web-sdk.html">AEP Web SDK</a>
                <a href="aep-debugger.html">AEP Debugger</a>
                <a href="rtcdp-1.html">RTCDP</a>
                <a href="ajo.html">AJO</a>
                <a href="cja.html">CJA</a>
                <a href="edge-services.html">Edge Services</a>
                <a href="universal-editor.html">Universal Editor</a>
                <a href="adobe-commerce.html">Adobe Commerce</a>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown">
          <a href="#" class="dropdown-toggle">Surge Advantage</a>
          <div class="dropdown-menu">
            <div class="dropdown-menu-columns" style="grid-template-columns: repeat(4, 1fr); min-width: 950px;">
              <div class="dropdown-column">
                <h4>Offerings</h4>
                <a href="implementation-partner.html">Implementation Partner</a>
                <a href="resourcing-partner.html">Resourcing Partner</a>
                <a href="gcc.html">GCC</a>
              </div>
              <div class="dropdown-column">
                <h4>Success Stories</h4>
                <a href="healthcare.html">Healthcare</a>
                <a href="financial-services.html">Financial Services</a>
                <a href="retail-industry.html">Retail Industry</a>
                <a href="automotive-sector.html">Automotive Sector</a>
                <a href="telecommunications.html">Telecommunications</a>
                <a href="hospitality-sector.html">Hospitality Sector</a>
                <a href="media-entertainment.html">Media & Entertainment</a>
                <a href="manufacturing-industry.html">Manufacturing Industry</a>
                <a href="education.html">Education</a>
                <a href="government-sector.html">Government Sector</a>
              </div>
              <div class="dropdown-column">
                <h4>Case Studies</h4>
                <a href="case-study-1.html">E-Commerce Personalization</a>
                <a href="case-study-2.html">Retail Marketing</a>
                <a href="case-study-3.html">Global Retailer</a>
                <a href="case-study-4.html">Automotive AEP</a>
                <a href="case-study-5.html">Media RTCDP</a>
              </div>
              <div class="dropdown-column">
                <h4>Surge Story</h4>
                <a href="our-journey.html">Our Journey</a>
                <a href="leadership-team.html">Leadership Team</a>
                <a href="global-presence.html">Global Presence</a>
                <a href="innovation-expertise.html">Innovation & Expertise</a>
                <a href="our-values.html">Our Values</a>
                <a href="work-culture.html">Work Culture</a>
                <a href="client-partnerships.html">Client Partnerships</a>
                <a href="sustainability-impact.html">Sustainability & Impact</a>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown">
          <a href="#" class="dropdown-toggle">Locations</a>
          <div class="dropdown-menu">
            <a href="locations.html#hyderabad">Hyderabad, India</a>
            <a href="locations.html#bangalore">Bangalore, India</a>
            <a href="locations.html#usa">United States</a>
          </div>
        </div>

        <a href="contactus.html" class="btn-primary">Contact Us</a>
      </div>
    </nav>
  </header>`;

// 2. Custom Content Dictionary
const splitContent = {
  // --- TECH PAGES ---
  'aem-sites': {
    heroBg: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    content: `
        <h3>Enterprise Web Content Management</h3>
        <p>Adobe Experience Manager (AEM) Sites is the industry-leading web content management system that allows you to create, manage, and deliver digital experiences across websites, mobile sites, and on-site screens to make them global in reach, yet personally relevant and engaging.</p>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:2rem; margin-top:3rem;">
           <div>
              <h4>Core Capabilities</h4>
              <ul style="list-style:disc; margin-left:1.5rem; line-height:2;">
                  <li><strong>Cross-channel content:</strong> Create once, deliver everywhere.</li>
                  <li><strong>Personalized experiences:</strong> Scale personalization with AI.</li>
                  <li><strong>Cloud Scale:</strong> Autoscaling with AEM as a Cloud Service.</li>
                  <li><strong>Single Page Applications:</strong> Seamless SPA integration.</li>
              </ul>
           </div>
           <div style="background: rgba(255,255,255,0.05); padding:2rem; border-radius:12px;">
              <h4>Why Surge for AEM?</h4>
              <p>We have migrated over 50+ enterprise sites to AEM Cloud Service. Our "Core-Components-First" approach reduces development time by 40%.</p>
           </div>
        </div>`
  },
  'adobe-analytics': {
    heroBg: 'linear-gradient(135deg, #2e1065 0%, #7e22ce 100%)',
    content: `
        <h3>Turn Data into Insights</h3>
        <p>Adobe Analytics lets you analyze data from anywhere in the customer journey with versatile reporting, predictive intelligence, and more.</p>
         <div style="display:grid; grid-template-columns: 1fr 1fr; gap:2rem; margin-top:3rem;">
           <div>
              <h4>Feature Highlights</h4>
               <ul style="list-style:disc; margin-left:1.5rem; line-height:2;">
                  <li><strong>Web Analytics:</strong> Measure traffic, engagement, and conversion.</li>
                  <li><strong>Marketing Attribution:</strong> understand what drives value.</li>
                  <li><strong>Predictive Analytics:</strong> AI-powered insights.</li>
              </ul>
           </div>
           <div style="background: rgba(255,255,255,0.05); padding:2rem; border-radius:12px;">
              <h4>Our Expertise</h4>
              <p>Surge engineers specialize in complex SDR (Solution Design Reference) creation and global deploymnents of Analysis Workspace.</p>
           </div>
        </div>`
  },
  'contactus': {
    // SPECIAL HANDLER
    isContact: true
  }
};

// 3. Page List
const pages = [
  // AEM pages
  { slug: 'aem-sites', title: 'AEM Sites', category: 'Adobe Experience Manager' },
  { slug: 'aem-forms', title: 'AEM Forms', category: 'Adobe Experience Manager' },
  { slug: 'aem-spa', title: 'AEM SPA', category: 'Adobe Experience Manager' },
  { slug: 'aem-headless', title: 'AEM Headless', category: 'Adobe Experience Manager' },
  { slug: 'aem-assets', title: 'AEM Assets', category: 'Adobe Experience Manager' },
  { slug: 'aem-as-cs', title: 'AEM As CS', category: 'Adobe Experience Manager' },

  // Marketing Cloud
  { slug: 'adobe-analytics', title: 'Adobe Analytics', category: 'Adobe Marketing Cloud' },
  { slug: 'adobe-target', title: 'Adobe Target', category: 'Adobe Marketing Cloud' },
  { slug: 'adobe-campaign', title: 'Adobe Campaign', category: 'Adobe Marketing Cloud' },
  { slug: 'adobe-sensai', title: 'Adobe Sensai', category: 'Adobe Marketing Cloud' },

  // Experience Platform
  { slug: 'aep-web-sdk', title: 'AEP Web SDK', category: 'Adobe Experience Platform' },
  { slug: 'aep-debugger', title: 'AEP Debugger', category: 'Adobe Experience Platform' },
  { slug: 'rtcdp-1', title: 'RTCDP', category: 'Adobe Experience Platform' },
  { slug: 'ajo', title: 'Adobe Journey Optimizer', category: 'Adobe Experience Platform' },
  { slug: 'cja', title: 'Customer Journey Analytics', category: 'Adobe Experience Platform' },
  { slug: 'edge-services', title: 'Edge Services', category: 'Adobe Experience Platform' },
  { slug: 'universal-editor', title: 'Universal Editor', category: 'Adobe Experience Platform' },
  { slug: 'adobe-commerce', title: 'Adobe Commerce', category: 'Adobe Experience Platform' },

  // Surge Advantage - Offerings
  { slug: 'implementation-partner', title: 'Implementation Partner', category: 'Surge Advantage - Offerings' },
  { slug: 'resourcing-partner', title: 'Resourcing Partner', category: 'Surge Advantage - Offerings' },
  { slug: 'gcc', title: 'Global Capability Center', category: 'Surge Advantage - Offerings' },

  // Success Stories
  { slug: 'healthcare', title: 'Healthcare', category: 'Success Stories' },
  { slug: 'financial-services', title: 'Financial Services', category: 'Success Stories' },
  { slug: 'retail-industry', title: 'Retail Industry', category: 'Success Stories' },
  { slug: 'automotive-sector', title: 'Automotive Sector', category: 'Success Stories' },
  { slug: 'telecommunications', title: 'Telecommunications', category: 'Success Stories' },
  { slug: 'hospitality-sector', title: 'Hospitality Sector', category: 'Success Stories' },
  { slug: 'media-entertainment', title: 'Media & Entertainment', category: 'Success Stories' },
  { slug: 'manufacturing-industry', title: 'Manufacturing Industry', category: 'Success Stories' },
  { slug: 'education', title: 'Education', category: 'Success Stories' },
  { slug: 'government-sector', title: 'Government Sector', category: 'Success Stories' },

  // Case Studies
  { slug: 'case-study-1', title: 'Enhancing E-Commerce', category: 'Case Studies' },
  { slug: 'case-study-2', title: 'Retail Marketing Transformation', category: 'Case Studies' },
  { slug: 'case-study-3', title: 'Global Retailer', category: 'Case Studies' },
  { slug: 'case-study-4', title: 'Automotive AEP', category: 'Case Studies' },
  { slug: 'case-study-5', title: 'Media RTCDP', category: 'Case Studies' },

  // Surge Story
  { slug: 'our-journey', title: 'Our Journey', category: 'Surge Story' },
  { slug: 'leadership-team', title: 'Leadership Team', category: 'Surge Story' },
  { slug: 'global-presence', title: 'Global Presence', category: 'Surge Story' },
  { slug: 'innovation-expertise', title: 'Innovation & Expertise', category: 'Surge Story' },
  { slug: 'our-values', title: 'Our Values', category: 'Surge Story' },
  { slug: 'work-culture', title: 'Work Culture', category: 'Surge Story' },
  { slug: 'client-partnerships', title: 'Client Partnerships', category: 'Surge Story' },
  { slug: 'sustainability-impact', title: 'Sustainability & Impact', category: 'Surge Story' },

  // Other pages
  { slug: 'contactus', title: 'Contact Us', category: 'General' },
  { slug: 'privacy', title: 'Privacy Policy', category: 'General' },
  { slug: 'locations', title: 'Our Locations', category: 'General' }
];

// 4. MAIN GENERATOR FUNCTION
const generatePage = (page) => {
  // A. Check for specific content handler
  const specific = splitContent[page.slug] || {};

  // B. Hero Background Logic (Nano Image Gradient if not specified)
  const heroBg = specific.heroBg || `linear-gradient(135deg, var(--color-bg), var(--color-bg-alt))`;

  // C. Body Content Logic
  let bodyContent = '';

  if (page.slug === 'contactus') {
    // --- SPEICAL CONTACT US TEMPLATE ---
    bodyContent = `
        <section class="hero" style="min-height: 40vh; display: flex; align-items: center; justify-content: center;">
            <div class="hero-content">
                <h1>Contact Us</h1>
                <p>Let's build something extraordinary together.</p>
            </div>
        </section>
        
        <section style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; max-width: 1400px; margin: 0 auto; padding: 4rem 2rem;">
            <!-- Contact Form -->
            <div style="background: var(--color-bg-alt); padding: 2.5rem; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05);">
                <h2 style="margin-bottom: 2rem;">Get in Touch</h2>
                <form action="contact_handler.php" method="POST" style="display: flex; flex-direction: column; gap: 1.5rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; color: var(--color-text-muted);">Name</label>
                        <input type="text" name="name" style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white;" placeholder="John Doe">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; color: var(--color-text-muted);">Email</label>
                        <input type="email" name="email" style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white;" placeholder="john@company.com">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; color: var(--color-text-muted);">Message</label>
                        <textarea name="message" rows="5" style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white;" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="submit" class="btn-primary" style="width: 100%; margin-top: 1rem;">Send Message</button>
                </form>
            </div>

            <!-- Map & Info -->
            <div>
                 <h2 style="margin-bottom: 2rem;">Our Global HQs</h2>
                 <div style="margin-bottom: 2rem;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.467367980562!2d78.3855!3d17.4375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f66c0725d9%3A0x6c49bc8875531853!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1701932847291!5m2!1sen!2sin" 
                    width="100%" height="300" style="border:0; border-radius: 16px; opacity: 0.8;" allowfullscreen="" loading="lazy"></iframe>
                 </div>
                 
                 <div style="display: grid; gap: 1.5rem;">
                    <div style="background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 12px;">
                        <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">India (HQ)</h4>
                        <p style="color: var(--color-text-muted);">Hitec City, Madhapur, Hyderabad, Telangana 500081</p>
                    </div>
                     <div style="background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 12px;">
                        <h4 style="color: var(--color-primary); margin-bottom: 0.5rem;">United States</h4>
                        <p style="color: var(--color-text-muted);">1200 Smith Street, Suite 1600, Houston, TX 77002</p>
                    </div>
                 </div>
            </div>
        </section>`;

  } else if (specific.content) {
    // --- CUSTOM CONTENT PAGE ---
    bodyContent = `
        <section class="hero" style="min-height: 50vh; display: flex; align-items: center; background: ${heroBg}; position: relative; overflow: hidden;">
            <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 30px 30px; mask-image: linear-gradient(to bottom, black, transparent);"></div>
            <div class="hero-content" style="position: relative; z-index: 2;">
                <h1>${page.title}</h1>
                <p style="font-size:1.1rem; margin-top:1rem; opacity: 0.8;">${page.category}</p>
            </div>
        </section>
        
        <section class="content-body" style="padding: 4rem 2rem; max-width: 1200px; margin: 0 auto;">
            ${specific.content}
        </section>
        `;
  } else {
    // --- GENERIC PAGE (Fallback) ---
    // But cleaner, without the "200 Professionals" block
    const colors = ['#0f172a', '#1e1b4b', '#312e81', '#1e293b'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    bodyContent = `
        <section class="hero" style="min-height: 50vh; display: flex; align-items: center; background: linear-gradient(135deg, ${randomColor}, #000000); position: relative;">
            <div style="position: absolute; inset: 0; background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .03) 25%, rgba(255, 255, 255, .03) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .03) 75%, rgba(255, 255, 255, .03) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .03) 25%, rgba(255, 255, 255, .03) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .03) 75%, rgba(255, 255, 255, .03) 76%, transparent 77%, transparent); background-size: 50px 50px;"></div>
            <div class="hero-content">
                <h1>${page.title}</h1>
                <p style="font-size:1.1rem; margin-top:1rem;">${page.category}</p>
            </div>
        </section>
        
        <section style="padding: 4rem 2rem; max-width: 1000px; margin: 0 auto; min-height: 400px;">
            <h2>About ${page.title}</h2>
            <p>Surge Software Solutions provides specialized services for <strong>${page.title}</strong>, tailored to specific enterprise needs. Our approach focuses on scalability, performance, and user experience.</p>
            <p style="margin-top: 1rem;">Contact our team to learn how we can support your initiatives in this domain.</p>
            
            <div style="margin-top: 3rem;">
                <a href="contactus.html" class="btn-primary">Request Capability Deck</a>
            </div>
        </section>
        `;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${page.title} – Surge Software Solutions</title>
  <meta name="description" content="Expert services for ${page.title} by Surge Software Solutions.">
  <link rel="icon" type="image/png" href="assets/images/favicon_new.png" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles/main.css" />
</head>
<body>
  ${navHTML}
  
  <main>
    ${bodyContent}
  </main>

  <footer>
    <p>&copy; 2025 Surge Software Solutions. All rights reserved.</p>
    <p><a href="privacy.html" style="color:var(--color-text-muted);">Privacy Policy</a> | <a href="contactus.html" style="color:var(--color-text-muted);">Contact</a></p>
  </footer>
  <script src="scripts/main.js"></script>
</body>
</html>`;
};

// 5. Execution
pages.forEach(page => {
  const filePath = path.join(__dirname, '..', page.slug + '.html');
  const content = generatePage(page);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated: ${page.slug}.html`);
});

// Update index.html navigation Only (Optional, but safe)
const indexAndPath = path.join(__dirname, '..', 'index.html');
if (fs.existsSync(indexAndPath)) {
  let indexContent = fs.readFileSync(indexAndPath, 'utf8');
  // We already updated index.html manually with the correct nav. 
  // We will simple replace the nav block again to be absolutely sure they match.
  const navMatch = indexContent.match(/<header>[\s\S]*?<\/header>/);
  if (navMatch) {
    indexContent = indexContent.replace(navMatch[0], navHTML);
    fs.writeFileSync(indexAndPath, indexContent, 'utf8');
    console.log('Updated index.html navigation.');
  }
}
