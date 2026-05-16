// ─── EmailJS Config ────────────────────────────────────────────────────────
// Replace these 3 values after setting up at emailjs.com
const EMAILJS_PUBLIC_KEY  = '_GTjd69NEboT0DDO6';
const EMAILJS_SERVICE_ID  = 'service_du405qw';
const EMAILJS_TEMPLATE_ID = 'template_ud1qwyo';

// ─── Products Data ─────────────────────────────────────────────────────────
// img: path relative to index.html  e.g. "images/products/hex-bolt.jpg"
// Set img to null if you haven't added the image yet — shows icon placeholder instead
// NOTE: All image filenames match EXACTLY what is in your ACEnterprise folder.
// Your images folder path: C:\Users\Ajitesh Pawar\Desktop\ACEnterprise\ACEnterprise\
// Copy that entire ACEnterprise folder and rename it to "images" next to index.html
const PRODUCTS = [
  // ── BOLTS ──
  { id:1,  name:"Anchor Bolt",           cat:"Bolts",        desc:"Heavy-duty anchor bolt for securing equipment and structures to concrete foundations.",  img:"images/AnchorBolt.png" },
  { id:2,  name:"Carriage Bolt",         cat:"Bolts",        desc:"Round head square-neck bolt. Ideal for wood-to-metal and metal-to-metal assemblies.",    img:"images/Carriage.png" },
  { id:3,  name:"Eye Bolt",              cat:"Bolts",        desc:"Circular looped head bolt for lifting, rigging and cable management applications.",       img:"images/EyeBolt.png" },
  { id:4,  name:"Flange Bolt",           cat:"Bolts",        desc:"Integrated washer flange provides larger bearing surface. No separate washer needed.",    img:"images/FlangeBolt.png" },
  { id:5,  name:"Socket Head Bolt",      cat:"Bolts",        desc:"Allen socket cap bolt. High tensile strength. Compact head for tight spaces.",           img:"images/SocketHeadBolt1.png" },
  { id:6,  name:"Stud Bolt",             cat:"Bolts",        desc:"Double-end threaded stud for flange joints and pressure vessel connections.",             img:"images/StudBolts.png" },
  { id:7,  name:"U Bolt",                cat:"Bolts",        desc:"U-shaped bolt for pipe clamps, exhaust systems and structural fastening.",                img:"images/UBolt.png" },
  { id:8,  name:"Threaded Rod",          cat:"Bolts",        desc:"Fully threaded rod for long-span fastening, hanger rods and structural connections.",     img:"images/ThreadedRod1.png" },

  // ── NUTS ──
  { id:9,  name:"Cap Nut",               cat:"Nuts",         desc:"Closed dome nut. Protects thread end and provides clean aesthetic finish.",               img:"images/CapNut.png" },
  { id:10, name:"Clinching Nut",         cat:"Nuts",         desc:"Press-fit into thin sheet metal. No welding required. Permanent threaded insert.",       img:"images/ClinchingNut.png" },
  { id:11, name:"Clinching Stud",        cat:"Nuts",         desc:"Press-in threaded stud for sheet metal. Provides strong, permanent thread projection.",   img:"images/ClinchingStuds.png" },
  { id:12, name:"Coupling Nut",          cat:"Nuts",         desc:"Long hex nut used to join two threaded rods end-to-end. Also called hex connector nut.", img:"images/CouplingNut.png" },
  { id:13, name:"Flange Nut",            cat:"Nuts",         desc:"Built-in flange distributes clamping load. Available serrated and non-serrated.",         img:"images/FlangeNuts.png" },
  { id:14, name:"Full Hex Blind Nut",    cat:"Nuts",         desc:"Hex body blind nut. Installed from one side into pre-drilled holes.",                     img:"images/FullHexBlindNut.png" },
  { id:15, name:"Hex Nut",               cat:"Nuts",         desc:"Standard hexagonal nut. DIN 934 / IS 1364. All grades, all materials.",                  img:"images/HexNut1.png" },
  { id:16, name:"Lock Nut",              cat:"Nuts",         desc:"All-metal prevailing torque nut. Resists loosening under vibration without nylon insert.", img:"images/LockNut.png" },
  { id:17, name:"Nylock Nut",            cat:"Nuts",         desc:"Nylon insert lock nut. Prevents loosening under vibration and dynamic loads.",            img:"images/NylockNuts.png" },
  { id:18, name:"Semi Hex Blind Nut",    cat:"Nuts",         desc:"Semi-hex body rivet nut. Partial hex for spin resistance in thinner materials.",          img:"images/SemiHexBlindNut.png" },
  { id:19, name:"Splined Nut",           cat:"Nuts",         desc:"Serrated splined body for maximum anti-rotation grip in soft materials.",                 img:"images/SplinedNut.png" },
  { id:20, name:"Square Nut",            cat:"Nuts",         desc:"Square profile for higher torque, hammer-in T-slot and channel nut applications.",        img:"images/SquareNut.png" },
  { id:21, name:"Standoff Nut",          cat:"Nuts",         desc:"Hex standoff spacer for PCB mounting and panel separation.",                              img:"images/StandoffNut.png" },
  { id:22, name:"Weld Nut",              cat:"Nuts",         desc:"Designed for projection welding onto metal sheets and structural plates.",                img:"images/WeldNut.png" },
  { id:23, name:"Wing Nut",              cat:"Nuts",         desc:"Hand-tightened nut with wing projections. Tool-free assembly and removal.",               img:"images/WingNut1.png" },

  // ── WASHERS ──
  { id:24, name:"Flat Washer",           cat:"Washers",      desc:"Plain flat washer for load distribution under bolt head or nut. DIN 125 / IS 2016.",     img:"images/FlatWasher.png" },
  { id:25, name:"Fender Washer",         cat:"Washers",      desc:"Extra large outer diameter for maximum load spreading on soft or thin materials.",        img:"images/FenderWasher.png" },
  { id:26, name:"Lock Washer",           cat:"Washers",      desc:"Split ring spring washer. Prevents bolt loosening due to vibration and torque.",          img:"images/LockWasher1.png" },
  { id:27, name:"Plane Washer",          cat:"Washers",      desc:"General purpose plain washer. Available in SS, mild steel and aluminium.",                img:"images/PlaneWasher.png" },
  { id:28, name:"Sealing Washer",        cat:"Washers",      desc:"Bonded rubber-metal washer providing watertight seal for roofing and plumbing.",          img:"images/SealingWasher.png" },
  { id:29, name:"Spring Washer",         cat:"Washers",      desc:"Helical split lock washer. Resists loosening under vibration. DIN 127.",                  img:"images/SpringWasher3.png" },
  { id:30, name:"Square Washer",         cat:"Washers",      desc:"Square flat washer for timber and structural steel applications.",                        img:"images/SquareWasher.png" },
  { id:31, name:"General Washers",       cat:"Washers",      desc:"Assorted washers — flat, spring, lock and sealing types in multiple sizes.",              img:"images/Washers.png" },

  // ── SCREWS ──
  { id:32, name:"Allen Socket Screw",    cat:"Screws",       desc:"Internal hex socket cap screw. High tensile. M3–M20. DIN 912.",                          img:"images/AllenSocketScrew.png" },
  { id:33, name:"Concrete Screw",        cat:"Screws",       desc:"Self-tapping screw for direct fastening into concrete, brick and masonry.",               img:"images/ConcreteScrew.png" },
  { id:34, name:"Drywall Screw",         cat:"Screws",       desc:"Bugle head screw for fixing drywall boards to metal or wood framing.",                    img:"images/DrywallScrew.png" },
  { id:35, name:"Machine Screw",         cat:"Screws",       desc:"Fully threaded fastener for use with a nut or into a tapped hole.",                      img:"images/MachineScrew.png" },
  { id:36, name:"Self-Tapping Screw",    cat:"Screws",       desc:"Forms its own mating thread when driven into metal, plastic or wood.",                   img:"images/SelfTappingScrew.png" },
  { id:37, name:"Set Screw",             cat:"Screws",       desc:"Headless grub screw. Fixes collars, pulleys and gears to shafts. DIN 913–916.",           img:"images/SetScrew.png" },
  { id:38, name:"Sheet Metal Screw",     cat:"Screws",       desc:"Sharp-point screw for fastening thin sheet metal without pre-tapping.",                   img:"images/SheetMetalScrew.png" },
  { id:39, name:"Wood Screw",            cat:"Screws",       desc:"Coarse thread screw designed specifically for wood fastening applications.",               img:"images/WoodScrew.png" },

  // ── BLIND RIVETS ──
  { id:40, name:"Closed Type Rivet",     cat:"Blind Rivets", desc:"Sealed closed-end blind rivet. Prevents moisture and gas ingress after installation.",    img:"images/ClosedTypeRivet.png" },
  { id:41, name:"Monobolt Rivet",        cat:"Blind Rivets", desc:"Structural blind rivet with high shear and tensile strength for load-bearing joints.",    img:"images/Monobolt.png" },
  { id:42, name:"Multi-Grip Rivet",      cat:"Blind Rivets", desc:"Single rivet accommodates a wide grip range. Reduces fastener inventory.",                img:"images/Multi-GripRivets.png" },
  { id:43, name:"Open End Blind Rivet",  cat:"Blind Rivets", desc:"Standard open-end aluminium or steel blind rivet. Most widely used blind fastener.",     img:"images/OpenEndBlindRivet.png" },
  { id:44, name:"Solid Rivet",           cat:"Blind Rivets", desc:"Traditional solid shank rivet for permanent, high-strength structural joints.",           img:"images/SolidRivet.png" },
  { id:45, name:"Structural Rivet",      cat:"Blind Rivets", desc:"Heavy-duty structural blind rivet for high-load aerospace and industrial applications.",   img:"images/StructuralRivert.png" },
  { id:46, name:"UniGrip Rivet",         cat:"Blind Rivets", desc:"Large flange head rivet for soft, thin or brittle base materials.",                       img:"images/UniGripRivert.png" },

  // ── BLIND NUTS ──
  { id:47, name:"Plain Round Blind Nut", cat:"Blind Nuts",   desc:"Round body rivet nut. Installed from one side into pre-drilled holes in thin sheet.",    img:"images/PlainRoundblindNut.png" },
  { id:48, name:"Semi Hex Blind Nut",    cat:"Blind Nuts",   desc:"Partial hex body provides spin resistance. Suits thin and soft sheet materials.",         img:"images/SemiHexBlindNut.png" },
  { id:49, name:"Full Hex Blind Nut",    cat:"Blind Nuts",   desc:"Full hex body for maximum anti-rotation grip in standard sheet metal applications.",      img:"images/FullHexBlindNut.png" },
];

const CAT_ICONS = {
  "Bolts":        "🔩",
  "Nuts":         "⬡",
  "Washers":      "⭕",
  "Screws":       "🔧",
  "Blind Rivets": "📌",
  "Blind Nuts":   "🔘",
};

// ─── Nav scroll behaviour ──────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('mainNav')?.classList.toggle('nav-scrolled', window.scrollY > 60);
});

// ─── Mobile nav ───────────────────────────────────────────────────────────
document.getElementById('navBurger')?.addEventListener('click', () => {
  document.getElementById('navMobile')?.classList.toggle('open');
});
function closeMobileNav() {
  document.getElementById('navMobile')?.classList.remove('open');
}

// ─── Scroll reveal ────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── Products render ──────────────────────────────────────────────────────
let activeFilter = 'All';
let searchQuery  = '';

function renderProducts() {
  const grid = document.getElementById('prodGrid');
  const count = document.getElementById('prodCount');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const catMatch  = activeFilter === 'All' || p.cat === activeFilter;
    const txtMatch  = !searchQuery || p.name.toLowerCase().includes(searchQuery) || p.cat.toLowerCase().includes(searchQuery);
    return catMatch && txtMatch;
  });

  count.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''} found`;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="prod-empty"><div class="prod-empty-icon">🔍</div><p>No products match your search.</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="prod-card">
      <div class="prod-img-wrap">
        <span class="prod-cat-tag">${CAT_ICONS[p.cat] || ''} ${p.cat}</span>
        ${p.img
          ? `<img src="${p.img}" alt="${p.name}" class="prod-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
          : ''}
        <div class="prod-img-placeholder" style="${p.img ? 'display:none' : 'display:flex'}">
          <span>${CAT_ICONS[p.cat] || '🔩'}</span>
        </div>
      </div>
      <div class="prod-info">
        <h3 class="prod-name">${p.name}</h3>
        <p class="prod-desc">${p.desc}</p>
        <a href="#contact" class="prod-enquire">Get a Quote →</a>
      </div>
    </div>
  `).join('');
}

// Filter buttons
document.getElementById('prodFilters')?.addEventListener('click', e => {
  if (!e.target.dataset.cat) return;
  document.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  activeFilter = e.target.dataset.cat;
  renderProducts();
});

// Search
let searchTimer;
document.getElementById('prodSearch')?.addEventListener('input', e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
  }, 200);
});

// ─── Cascading Category → Product Dropdown ────────────────────────────────
const PRODUCT_MAP = {
  'Bolts': [
    'Anchor Bolt', 'Carriage Bolt', 'Eye Bolt', 'Flange Bolt',
    'Socket Head Bolt', 'Stud Bolt', 'U Bolt', 'Threaded Rod'
  ],
  'Nuts': [
    'Cap Nut', 'Clinching Nut', 'Clinching Stud', 'Coupling Nut',
    'Flange Nut', 'Full Hex Blind Nut', 'Hex Nut', 'Lock Nut',
    'Nylock Nut', 'Semi Hex Blind Nut', 'Splined Nut', 'Square Nut',
    'Standoff Nut', 'Weld Nut', 'Wing Nut'
  ],
  'Washers': [
    'Flat Washer', 'Fender Washer', 'Lock Washer', 'Plane Washer',
    'Sealing Washer', 'Spring Washer', 'Square Washer'
  ],
  'Screws': [
    'Allen Socket Screw', 'Concrete Screw', 'Drywall Screw',
    'Machine Screw', 'Self-Tapping Screw', 'Set Screw',
    'Sheet Metal Screw', 'Wood Screw'
  ],
  'Blind Rivets': [
    'Closed Type Rivet', 'Monobolt Rivet', 'Multi-Grip Rivet',
    'Open End Blind Rivet', 'Solid Rivet', 'Structural Rivet', 'UniGrip Rivet'
  ],
  'Blind Nuts': [
    'Plain Round Blind Nut', 'Semi Hex Blind Nut',
    'Full Hex Blind Nut'
  ],
};

document.getElementById('cfCategory')?.addEventListener('change', function () {
  const cat            = this.value;
  const productSelect  = document.getElementById('cfProduct');
  const productGroup   = document.getElementById('productGroup');
  const customGroup    = document.getElementById('customProductGroup');
  const customInput    = document.getElementById('cfCustomProduct');

  // Reset product dropdown
  productSelect.innerHTML = '<option value="">— Select Product —</option>';

  if (cat === 'Custom') {
    productGroup.style.display  = 'none';
    customGroup.style.display   = 'block';
    customInput.required        = true;
    productSelect.required      = false;
  } else if (cat && PRODUCT_MAP[cat]) {
    productGroup.style.display  = 'block';
    customGroup.style.display   = 'none';
    customInput.required        = false;
    productSelect.required      = true;
    PRODUCT_MAP[cat].forEach(p => {
      const opt = document.createElement('option');
      opt.value = p; opt.textContent = p;
      productSelect.appendChild(opt);
    });
  } else {
    productGroup.style.display  = 'none';
    customGroup.style.display   = 'none';
    productSelect.required      = false;
    customInput.required        = false;
  }
});

// ─── Contact form (EmailJS) ────────────────────────────────────────────────
if (typeof emailjs !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name    = document.getElementById('cfName').value.trim();
  const email   = document.getElementById('cfEmail').value.trim();
  const phone   = document.getElementById('cfPhone').value.trim();
  const cat     = document.getElementById('cfCategory').value;
  const message = document.getElementById('cfMessage').value.trim();

  // Determine product value — standard dropdown or custom input
  const isCustom  = cat === 'Custom';
  const product   = isCustom
    ? document.getElementById('cfCustomProduct').value.trim()
    : document.getElementById('cfProduct').value.trim();

  if (!name || !email || !phone || !cat || !message) {
    alert('Please fill in all required fields (Name, Email, Phone, Category, Message).');
    return;
  }
  if (!isCustom && !product) {
    alert('Please select a product.');
    return;
  }
  if (isCustom && !product) {
    alert('Please describe your custom product requirement.');
    return;
  }

  const btn = document.getElementById('cfSubmit');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name:  name,
    from_email: email,
    reply_to:   email,
    phone:      phone,
    category:   cat,
    product:    product || 'Not specified',
    message:    message,
    to_email:   'sales.acdcs@gmail.com',
    subject:    `Enquiry from ${name} — A&C Enterprise`,
  }).then(() => {
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }).catch(err => {
    console.error('EmailJS error:', err);
    alert('Failed to send. Please email us directly at sales.acdcs@gmail.com');
    btn.textContent = 'Send Enquiry →';
    btn.disabled = false;
  });
});

function resetForm() {
  document.getElementById('contactForm').reset();
  document.getElementById('contactForm').style.display = 'block';
  document.getElementById('formSuccess').style.display = 'none';
  document.getElementById('cfSubmit').textContent = 'Send Enquiry →';
  document.getElementById('cfSubmit').disabled = false;
}

// ─── Init ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  // Re-trigger reveal for any elements not yet in view
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }, 100);
});
