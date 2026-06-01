const terminalBody = document.getElementById('terminalBody');
const terminalInput = document.getElementById('terminalInput');

// Aktuálny nastavený jazyk (sk / en)
let currentLang = 'sk';

// Definované príkazy a ich lokalizované výstupy
const commands = {
  sk: {
    help: `
          <div class="prompt">Dostupné príkazy:</div>
          <ul style="list-style: none; padding-left: 10px; line-height: 1.6;">
            <li><span class="highlight">lang [sk/en]</span> - Zmena jazyka (napr. <code class="keyword">lang en</code>)</li>
            <li><span class="highlight">ls / help</span> - Zoznam dostupných príkazov</li>
            <li><span class="highlight">clear</span> - Vyčistí históriu terminálu</li>
            <br>
            <li><span class="highlight">env</span> - Moje developerské prostredie</li>
            <li><span class="highlight">skills</span> - Technické zručnosti a technológie</li>
            <li><span class="highlight">code</span> - Moje programátorské projekty</li>
            <li><span class="highlight">life</span> - Osobné projekty a úspechy</li>
            <li><span class="highlight">exp</span> - Pracovné skúsenosti</li>
            <li><span class="highlight">edu</span> - Vzdelanie</li>
            <br>
            <li><span class="highlight">about</span> - V skratke o mne</li>
            <li><span class="highlight">hobby</span> - Čomu sa venujem vo voľnom čase</li>
            <li><span class="highlight">matrix</span> - Spustí easter-egg v konzole</li>
            <li><span class="highlight">contact</span> - Zobrazí kontaktné údaje a životopis</li>
          </ul>
        `,
    ls: `
          <div class="prompt">Dostupné sekcie (príkazy):</div>
          <div style="display: flex; gap: 15px; flex-wrap: wrap; font-family: monospace;">
            <span class="highlight">neofetch</span>
            <span class="highlight">env</span>
            <span class="highlight">skills</span>
            <span class="highlight">code</span>
            <span class="highlight">life</span>
            <span class="highlight">exp</span>
            <span class="highlight">edu</span>
            <span class="highlight">about</span>
            <span class="highlight">hobby</span>
            <span class="highlight">matrix</span>
            <span class="highlight">contact</span>
          </div>
        `,
    env: `
          <div class="prompt">Moje dev prostredie</div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-top: 15px;">
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; display: flex; align-items: center; gap: 12px;">
              <i class="fab fa-apple fa-2xl" style="color: var(--env-icons);" title="macOS"></i>
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">OS</span>
                <strong style="color: var(--text-main); font-size: 0.95rem;">macOS</strong>
              </div>
            </div>
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; display: flex; align-items: center; gap: 12px;">
              <i class="fas fa-terminal fa-2xl" style="color: var(--env-icons);" title="Warp Terminal"></i>
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Terminal</span>
                <strong style="color: var(--text-main); font-size: 0.95rem;">Warp</strong>
              </div>
            </div>
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; display: flex; align-items: center; gap: 12px;">
              <i class="fas fa-beer fa-2xl" style="color: var(--env-icons);" title="Homebrew"></i>
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Package Mgr</span>
                <strong style="color: var(--text-main); font-size: 0.95rem;">Homebrew</strong>
              </div>
            </div>
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; display: flex; align-items: center; gap: 12px;">
              <i class="fas fa-code fa-2xl" style="color: var(--env-icons);" title="VSCode"></i>
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Editor</span>
                <strong style="color: var(--text-main); font-size: 0.95rem;">VSCode</strong>
              </div>
            </div>
          </div>
        `,
    skills: `
          <div class="prompt">Tech skills & Technológie</div>
          <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 10px;">
            <div> 
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px;">Frontend:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style="height: 18px;"> <span>HTML5</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style="height: 18px;"> <span>CSS3</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" style="height: 18px;"> <span>Tailwind 4</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" style="height: 18px;"> <span>JavaScript</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" style="height: 18px;"> <span>Bootstrap</span></div>
              </div>
            </div>
            <div> 
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px;">Backend & Databázy:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" style="height: 18px;"> <span>Node.js</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" style="height: 18px;"> <span>PHP</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style="height: 18px;"> <span>Java</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" style="height: 18px;"> <span>MySQL</span></div>
              </div>
            </div>
            <div>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px;">Nástroje:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" style="height: 18px;"> <span>Git</span></div>
              </div>
            </div>
          </div>
        `,
    code: `
          <div class="prompt">Ukážka mojej práce a technických riešení</div>
          <div class="project-grid">
            
            <div class="project-card" style="grid-column: 1 / -1;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
                <h3 class="highlight" style="margin: 0;">Osobné portfólio</h3>
                <div class="tech-badge-container">
                  <i class="fab fa-html5" style="color: #e34f26; font-size: 1.1rem;"></i>
                  <i class="fab fa-css3-alt" style="color: #1572b6; font-size: 1.1rem;"></i>
                  <i class="fab fa-js" style="color: #f7df1e;"></i>
                </div>
              </div>
              <p style="margin: 10px 0;">Interaktívna vizitka vo forme terminálu. Predstavenie mňa a mojej práce s dôrazom na rýchlosť, minimalizmus a sémantický kód.</p>
              <ul style="list-style: square; padding-left: 20px; margin: 12px 0; font-size: 0.9rem; color: var(--text-main);">
                <li>Slovenská a anglická lokalizácia (prepínanie jazykov v reálnom čase)</li>
              </ul>
              <div style="margin-top: 12px;">
                <a href="https://github.com/kytka9/personal-portfolio-terminal" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: var(--bg-input); border: 1px solid var(--border-color); padding: 5px 12px; border-radius: 4px; font-size: 0.85rem;">
                  <i class="fab fa-github"></i> Code
                </a>
              </div>
            </div>

            <div class="project-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <h3 class="highlight" style="margin: 0;">kytka9notes</h3>
                  <div class="tech-badge-container">
                    <i class="fab fa-html5" style="color: #e34f26; font-size: 1.1rem;"></i>
                    <i class="fab fa-css3-alt" style="color: #1572b6; font-size: 1.1rem;"></i>
                    <i class="fab fa-js" style="color: #f7df1e;"></i>
                  </div>
                </div>
                <p style="margin-bottom: 15px;">Nájdi kód skôr, ako otvoríš Google - šikovný cheat sheet pre vývojárov.</p>
              </div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
                <a href="https://kytka9.github.io/kytka9notes/" target="_blank" style="background: rgba(34, 211, 238, 0.1); border: 1px solid var(--accent-cyan); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fas fa-eye"></i> Live View</a>
                <a href="https://github.com/kytka9/kytka9notes" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fab fa-github"></i> Code</a>
                <a href="https://dev.to/kytka9/kytka9notes-najdi-kod-skor-ako-otvoris-google-46k6" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fab fa-dev"></i> dev.to</a>
              </div>
            </div>

            <div class="project-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <h3 class="highlight" style="margin: 0; font-size: 1.1rem;">Colorado FansHub</h3>
                  <div class="tech-badge-container">
                    <i class="fab fa-html5" style="color: #e34f26; font-size: 1.1rem;"></i>
                    <i class="fab fa-css3-alt" style="color: #1572b6; font-size: 1.1rem;"></i>
                    <i class="fab fa-js" style="color: #f7df1e;"></i>
                  </div>
                </div>
                <p style="margin-bottom: 15px;">Interaktívna webová platforma pre fanúšikov NHL. Implementácia responzívneho dizajnu a dynamického obsahu.</p>
              </div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
                <a href="https://kytka9.github.io/Colorado_Avalanche_fanshub/" target="_blank" style="background: rgba(34, 211, 238, 0.1); border: 1px solid var(--accent-cyan); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fas fa-eye"></i> Live View</a>
                <a href="https://github.com/kytka9/Colorado_Avalanche_fanshub" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fab fa-github"></i> Code</a>
              </div>
            </div>

          </div>
        `,
    life: `
          <div class="prompt">Projekty, ktorých som bol súčasťou</div>
          <div class="project-grid">
            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin: 0;"><i class="fa-solid fa-person-snowboarding"></i> Take a Deck</h3>
                <div class="tech-badge-container">
                    <small>2010-2014</small>
                  </div>
              </div>
              <p style="margin-bottom: 12px;">Organizátor kultúrno-športových podujatí pod záštitou Džizo crew. Zameranie na komunitný rozvoj a extrémne športy.</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://www.facebook.com/DzizoCrew/" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://maps.app.goo.gl/VnCCcKmAKyNTrxwm7" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i></a>
                <a href="http://makovica.sk" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i></a>
              </div>
            </div>

            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin-bottom: 10px;"><i class="fa-brands fa-redhat"></i> WeifouDilla</h3>
                <div class="tech-badge-container">
                    <small>2017-2019</small>
                </div>
              </div>
              <p>Kmeňový spolutvorca fashion projektu od vzniku po prevádzku, správa e-shopu, sociálnych sietí a budovanie online komunít. Zameranie na udržateľný predaj vzácnych vintage kúskov.</p>
            </div>
          </div>
        `,
    exp: `
          <div class="prompt">Pracovné skúsenosti</div>
          <div class="project-grid">
            
            <div class="project-card" style="grid-column: 1 / -1;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
                <h3 class="highlight" style="margin: 0;">Výrobný pracovník / dozorca</h3>                
                <div class="tech-badge-container">2023 - 2025</div>
              </div>
              <p style="margin: 10px 0;">Vysoká miera presnosti pri tvarovaní kompozitných foriem pre letecký priemysel. Schopnosť neomylnej práce podľa zložitých technických výkresov (Blueprint Reading) s dôrazom na nulovú chybovosť a dodržanie deadline-ov.</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/FA6zo3THeJUpKKJKA" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i> Laupheim, DE</a>
                <a href="https://www.piekenbrink.de" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i> piekenbrink.de</a>
                <p>Piekenbrink GmbH, 88471 Laupheim, DE</p>
              </div>
            </div>  

            <div class="project-card" style="grid-column: 1 / -1;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
                <h3 class="highlight" style="margin: 0;">Teamleader</h3>                
                <div class="tech-badge-container">2022 - 2023</div>
              </div>
              <p style="margin: 10px 0;">Zabezpečenie 100 % integrity údajov v databáze, komunikácia v anglicky hovoriacom tíme.</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/HxEnTy4gPkSb8aM29" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i> Delft, NL</a>
                <a href="https://www.hanos.nl/nl/groothandel/HANOS-Denhaag-Delft" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i> hanos.nl</a>
                <p>Hanos Horeca Groothandel, 2616 LZ Delft, NL</p>
              </div>
            </div>  

            <div class="project-card" style="grid-column: 1 / -1;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
                <h3 class="highlight" style="margin: 0;">Kuriér</h3>                
                <div class="tech-badge-container">2019 - 2022</div>
              </div>
              <p style="margin: 10px 0;">Práca v digitálnych systémoch,
                riešenie nečakaných problémov v teréne a dodržiavanie časových termínov.</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/JozEioePCoX9ujge9" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i> Dordrecht, NL</a>
                <p>MCR Transport B.V., 3316 KH Dordrecht, NL</p>
              </div>
            </div>  

            <div class="project-card" style="grid-column: 1 / -1;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
                <h3 class="highlight" style="margin: 0;">Housekeeping</h3>                
                <div class="tech-badge-container">2017 - 2019</div>
              </div>
              <p style="margin: 10px 0;">Starostlivosť o prevádzku apartmánov a zabezpečovanie požiadaviek hostí.</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/zfUR3wkDUres35FU6" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i> Hermagor, AT</a>
                <a href="https://www.vmglanz.at" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i> vmglanz.at</a>
                <p>VM Glanz Gmbh, 9620 Hermagor, AT</p>
              </div>
            </div>  

          </div>
        `,
    edu: `
          <div class="prompt">Vzdelanie</div>
          <div class="project-grid">
            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin: 0;">ITnetwork Academy Slovensko</h3>
                <div class="tech-badge-container">
                    <small>2025</small>
                  </div>
              </div>
              <p style="margin-bottom: 12px;">OOP, tvorba webových aplikácií v Jave, práca s databázami, UML</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://www.itnetwork.sk" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i></a>
              </div>
            </div>

            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin: 0;">Ekonomická Univerzita v Bratislave</h3>
                <div class="tech-badge-container">
                    <small>2014 - 2016</small>
                  </div>
              </div>
              <p style="margin-bottom: 12px;">Fakulta medzinárodného obchodu (tri semestre)</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/hKj9dK7ARJSJshZa7" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i></a>
                <a href="https://www.euba.sk" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i></a>
              </div>
            </div>

            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin: 0;">Gymnázium L. Stöckela v Bardejove</h3>
                <div class="tech-badge-container">
                    <small>2009 - 2013</small>
                  </div>
              </div>
              <p style="margin-bottom: 12px;">Zameranie: matematika a geografia</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/hr3njGnMAe1zVMDD8" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i></a>
                <a href="https://gymlsbj.edupage.org" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i></a>
              </div>
            </div>

            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin: 0;">ZUŠ Michala Vileca v Bardejove</h3>
                <div class="tech-badge-container">
                    <small>2001-2009</small>
                  </div>
              </div>
              <p style="margin-bottom: 12px;">Maľba, kresba, modelovanie, fotografovanie, linorez</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/DDBL37R9UAfFmo5B6" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i></a>
                <a href="https://www.zusmvileca.com" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i></a>
              </div>
            </div>

          </div>
        `,
    neofetch: `
        <div class="warp-block">
          <div class="output-text">
            <pre style="font-family: monospace; line-height: 1.3; margin: 0;">
          ██╗██╗  ██╗    <span class="highlight">kytka9</span>@<span class="keyword">portfolio-os</span>
          ██║██║ ██╔╝    -------------------------
          ██║█████╔╝     OS: Ján Klimek WebOS v1.0.0
          ██║██╔═██╗     Kernel: Human_Brain_2026.06
        ████║██║  ██╗    Uptime: 30+ years
        ╚═══╝╚═╝  ╚═╝    Shell: kytka-sh 2.4
                         IDE: VS Code / Cursor
                         Fav-Lang: JavaScript

                        <span style="display: inline-block; width: 12px; height: 12px; background: var(--warp-accent); border-radius: 2px;"></span> <span style="display: inline-block; width: 12px; height: 12px; background: var(--warp-accent-green); border-radius: 2px;"></span> <span style="display: inline-block; width: 12px; height: 12px; background: var(--warp-text-main); border-radius: 2px;"></span> <span style="display: inline-block; width: 12px; height: 12px; background: var(--warp-text-muted); border-radius: 2px;"></span>
            </pre>
          </div>
        </div>
        `,
    about: `
          <div class="output-text" id="welcomeOutput">
          <p>...</p>
          <p>Moje základy síce stoja na niekoľkomesačnom kurze, ale môj skutočný workflow formuje dnešná digitálna doba. V ére AI je domáce vzdelávanie efektívnejšie než kedykoľvek predtým. Nevnímam AI ako skratku, ale ako akcelerátor – umožňuje mi rýchlo prenikať do hĺbky komplexných problémov, analyzovať osvedčené postupy (best practices) a neustále zvyšovať kvalitu môjho kódu. Vďaka tomu dokážem držať krok s najnovšími trendmi a prinášať riešenia, ktoré sú rýchle, moderné a čisté.</p>
          </div>
          <p>...</p>
          `,
    hobby: `
          <div class="prompt">Koníčky, ktorým sa venujem vo voľnom čase</div>
          <p style="margin-bottom: 12px;">🌲 Bushcraft <small style="color: var(--text-muted);">// Status: Plne offline v prírode</small></p>
          <p style="margin-bottom: 12px;">⚔️ Age of Empires 2 <small style="color: var(--text-muted);">// Strategická úroveň: Expert</small></p>
          <p style="margin-bottom: 12px;">🏂 Snowboarding <small style="color: var(--text-muted);">// Gravitácia: Otestovaná na svahu</small></p>         
          `,
    matrix: `
          <div class="prompt">./matrix.sh</div>
          <p style="color: var(--warp-accent-green); font-weight: bold;"><i class="fas fa-user-secret"></i> Zobuď sa, Neo... Matrix ťa ovláda !!!</p>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 5px;">Skontroluj si vývojársku konzolu (F12) pre prekvapenie!</p>
        `,
    contact: `
          <div class="prompt">Kontaktné údaje & Životopis</div>
          <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px;">

            <p><i class="fas fa-file-pdf" style="width: 25px; color: var(--warp-accent);"></i> <strong>Resume :</strong> <a href="../assets/resume/html/resume_sk.html" target="_blank" class="highlight">Open Resume</a></p>

            <p><i class="fas fa-envelope" style="width: 25px; color: var(--warp-accent);"></i> <strong>Email:</strong> <span class="highlight" style="cursor: pointer;" onclick="copyToClipboard('klimekjani@gmail.com', this)">klimekjani@gmail.com</span></p>
            
            <p><i class="fab fa-github" style="width: 25px; color: var(--warp-accent);"></i> <strong>GitHub:</strong> <span class="highlight" style="cursor: pointer;"><a href="https://github.com/kytka9" target="_blank">github.com/kytka9</a></span></p>
            
            
            <p><i class="fab fa-discord" style="width: 25px; color: var(--warp-accent);"></i> <strong>Discord:</strong> <span class="highlight" style="cursor: pointer;" onclick="copyToClipboard('kytka9', this)">kytka9</span></p>
            
            <p><i class="fab fa-dev" style="width: 25px; color: var(--warp-accent);"></i> <strong>DEV.to:</strong> <span class="highlight" style="cursor: pointer;"><a href="https://dev.to/kytka9" target="_blank">dev.to/kytka9</a></span></p>
            
          </div>
        `,
  },
  en: {
    help: `
          <div class="prompt">Available commands:</div>
          <ul style="list-style: none; padding-left: 10px; line-height: 1.6;">
            <li><span class="highlight">lang [sk/en]</span> - Change language (e.g., <code class="keyword">lang en</code>)</li>
            <li><span class="highlight">ls / help</span> - List available commands</li>
            <li><span class="highlight">clear</span> - Clear terminal history</li>
            <br>
            <li><span class="highlight">env</span> - My development environment</li>
            <li><span class="highlight">skills</span> - Technical skills and technologies</li>
            <li><span class="highlight">code</span> - My programming projects</li>
            <li><span class="highlight">life</span> - Personal projects and achievements</li>
            <li><span class="highlight">exp</span> - Work experience</li>
            <li><span class="highlight">edu</span> - Education</li>
            <br>
            <li><span class="highlight">about</span> - Brief info about me</li>
            <li><span class="highlight">hobby</span> - What I do in my free time</li>
            <li><span class="highlight">matrix</span> - Launch an easter egg in the console</li>
            <li><span class="highlight">contact</span> - Show contact details and resume</li>
          </ul>
        `,
    ls: `
          <div class="prompt">Available sections (commands):</div>
          <div style="display: flex; gap: 15px; flex-wrap: wrap; font-family: monospace;">
            <span class="highlight">neofetch</span>
            <span class="highlight">env</span>
            <span class="highlight">skills</span>
            <span class="highlight">code</span>
            <span class="highlight">life</span>
            <span class="highlight">exp</span>
            <span class="highlight">edu</span>
            <span class="highlight">about</span>
            <span class="highlight">hobby</span>
            <span class="highlight">matrix</span>
            <span class="highlight">contact</span>
          </div>
        `,
    env: `
          <div class="prompt">My Dev Environment</div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-top: 15px;">
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; display: flex; align-items: center; gap: 12px;">
              <i class="fab fa-apple fa-2xl" style="color: var(--env-icons);" title="macOS"></i>
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">OS</span>
                <strong style="color: var(--text-main); font-size: 0.95rem;">macOS</strong>
              </div>
            </div>
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; display: flex; align-items: center; gap: 12px;">
              <i class="fas fa-terminal fa-2xl" style="color: var(--env-icons);" title="Warp Terminal"></i>
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Terminal</span>
                <strong style="color: var(--text-main); font-size: 0.95rem;">Warp</strong>
              </div>
            </div>
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; display: flex; align-items: center; gap: 12px;">
              <i class="fas fa-beer fa-2xl" style="color: var(--env-icons);" title="Homebrew"></i>
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Package Mgr</span>
                <strong style="color: var(--text-main); font-size: 0.95rem;">Homebrew</strong>
              </div>
            </div>
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); padding: 12px; border-radius: 6px; display: flex; align-items: center; gap: 12px;">
              <i class="fas fa-code fa-2xl" style="color: var(--env-icons);" title="VSCode"></i>
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Editor</span>
                <strong style="color: var(--text-main); font-size: 0.95rem;">VSCode</strong>
              </div>
            </div>
          </div>
        `,
    skills: `
          <div class="prompt">Tech Skills & Technologies</div>
          <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 10px;">
            <div> 
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px;">Frontend:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style="height: 18px;"> <span>HTML5</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style="height: 18px;"> <span>CSS3</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" style="height: 18px;"> <span>Tailwind 4</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" style="height: 18px;"> <span>JavaScript</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" style="height: 18px;"> <span>Bootstrap</span></div>
              </div>
            </div>
            <div> 
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px;">Backend & Databases:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" style="height: 18px;"> <span>Node.js</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" style="height: 18px;"> <span>PHP</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style="height: 18px;"> <span>Java</span></div>
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" style="height: 18px;"> <span>MySQL</span></div>
              </div>
            </div>
            <div>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px;">Tools:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                <div class="tech-badge-container"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" style="height: 18px;"> <span>Git</span></div>
              </div>
            </div>
          </div>
        `,
    code: `
          <div class="prompt">Showcase of My Work & Technical Solutions</div>
          <div class="project-grid">
            
            <div class="project-card" style="grid-column: 1 / -1;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
                <h3 class="highlight" style="margin: 0;">Personal Portfolio</h3>
                <div class="tech-badge-container">
                  <i class="fab fa-html5" style="color: #e34f26; font-size: 1.1rem;"></i>
                  <i class="fab fa-css3-alt" style="color: #1572b6; font-size: 1.1rem;"></i>
                  <i class="fab fa-js" style="color: #f7df1e;"></i>
                </div>
              </div>
              <p style="margin: 10px 0;">An interactive portfolio website styled as a terminal terminal. Showcasing my profile and work with a strong emphasis on performance, minimalism, and semantic code.</p>
              <ul style="list-style: square; padding-left: 20px; margin: 12px 0; font-size: 0.9rem; color: var(--text-main);">
                <li>Slovak and English localization (real-time language switching)</li>
              </ul>
              <div style="margin-top: 12px;">
                <a href="https://github.com/kytka9/personal-portfolio-terminal" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: var(--bg-input); border: 1px solid var(--border-color); padding: 5px 12px; border-radius: 4px; font-size: 0.85rem;">
                  <i class="fab fa-github"></i> Code
                </a>
              </div>
            </div>

            <div class="project-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <h3 class="highlight" style="margin: 0;">kytka9notes</h3>
                  <div class="tech-badge-container">
                    <i class="fab fa-html5" style="color: #e34f26; font-size: 1.1rem;"></i>
                    <i class="fab fa-css3-alt" style="color: #1572b6; font-size: 1.1rem;"></i>
                    <i class="fab fa-js" style="color: #f7df1e;"></i>
                  </div>
                </div>
                <p style="margin-bottom: 15px;">Find the code snippet before you even open Google - a handy cheat sheet for developers.</p>
              </div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
                <a href="https://kytka9.github.io/kytka9notes/" target="_blank" style="background: rgba(34, 211, 238, 0.1); border: 1px solid var(--accent-cyan); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fas fa-eye"></i> Live View</a>
                <a href="https://github.com/kytka9/kytka9notes" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fab fa-github"></i> Code</a>
                <a href="https://dev.to/kytka9/kytka9notes-najdi-kod-skor-ako-otvoris-google-46k6" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fab fa-dev"></i> dev.to</a>
              </div>
            </div>

            <div class="project-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <h3 class="highlight" style="margin: 0; font-size: 1.1rem;">Colorado FansHub</h3>
                  <div class="tech-badge-container">
                    <i class="fab fa-html5" style="color: #e34f26; font-size: 1.1rem;"></i>
                    <i class="fab fa-css3-alt" style="color: #1572b6; font-size: 1.1rem;"></i>
                    <i class="fab fa-js" style="color: #f7df1e;"></i>
                  </div>
                </div>
                <p style="margin-bottom: 15px;">An interactive web platform for NHL fans. Featuring responsive layout design and dynamic content integration.</p>
              </div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
                <a href="https://kytka9.github.io/Colorado_Avalanche_fanshub/" target="_blank" style="background: rgba(34, 211, 238, 0.1); border: 1px solid var(--accent-cyan); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fas fa-eye"></i> Live View</a>
                <a href="https://github.com/kytka9/Colorado_Avalanche_fanshub" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fab fa-github"></i> Code</a>
              </div>
            </div>

          </div>
        `,
    life: `
          <div class="prompt">Projects I've Been Part Of</div>
          <div class="project-grid">
            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin: 0;"><i class="fa-solid fa-person-snowboarding"></i> Take a Deck</h3>
                <div class="tech-badge-container">
                    <small>2010-2014</small>
                  </div>
              </div>
              <p style="margin-bottom: 12px;">Organizer of cultural and sports events hosted by the Džizo crew. Main focus on community development and action sports.</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://www.facebook.com/DzizoCrew/" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://maps.app.goo.gl/VnCCcKmAKyNTrxwm7" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i></a>
                <a href="http://makovica.sk" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i></a>
              </div>
            </div>

            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin-bottom: 10px;"><i class="fa-brands fa-redhat"></i> WeifouDilla</h3>
                <div class="tech-badge-container">
                    <small>2017-2019</small>
                </div>
              </div>
              <p>Core co-creator of a fashion startup from inception to operation, managing the e-shop, handling social media platforms, and organic community building. Focused on sustainable retail of rare vintage items.</p>
            </div>
          </div>
        `,
    exp: `
          <div class="prompt">Work Experience</div>
          <div class="project-grid">
            
            <div class="project-card" style="grid-column: 1 / -1;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
                <h3 class="highlight" style="margin: 0;">Production Worker / Supervisor</h3>                
                <div class="tech-badge-container">2023 - 2025</div>
              </div>
              <p style="margin: 10px 0;">Maintained high precision standards while shaping composite molds for the aerospace industry. Proven ability to flawlessly interpret complex blueprints, ensuring zero-error delivery within tight production schedules.</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/FA6zo3THeJUpKKJKA" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i> Laupheim, DE</a>
                <a href="https://www.piekenbrink.de" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i> piekenbrink.de</a>
                <p>Piekenbrink GmbH, 88471 Laupheim, DE</p>
              </div>
            </div>  

            <div class="project-card" style="grid-column: 1 / -1;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
                <h3 class="highlight" style="margin: 0;">Team Leader</h3>                
                <div class="tech-badge-container">2022 - 2023</div>
              </div>
              <p style="margin: 10px 0;">Ensured 100% data integrity within system databases, facilitating seamless communications in a fast-paced English-speaking team environment.</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/HxEnTy4gPkSb8aM29" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i> Delft, NL</a>
                <a href="https://www.hanos.nl/nl/groothandel/HANOS-Denhaag-Delft" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i> hanos.nl</a>
                <p>Hanos Horeca Groothandel, 2616 LZ Delft, NL</p>
              </div>
            </div>  

            <div class="project-card" style="grid-column: 1 / -1;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
                <h3 class="highlight" style="margin: 0;">Courier</h3>                
                <div class="tech-badge-container">2019 - 2022</div>
              </div>
              <p style="margin: 10px 0;">Operated within complex digital dispatching logistics systems, troubleshooting unexpected challenges in the field while meeting strict service-level agreements (SLAs).</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/JozEioePCoX9ujge9" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i> Dordrecht, NL</a>
                <p>MCR Transport B.V., 3316 KH Dordrecht, NL</p>
              </div>
            </div>  

            <div class="project-card" style="grid-column: 1 / -1;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
                <h3 class="highlight" style="margin: 0;">Housekeeping</h3>                
                <div class="tech-badge-container">2017 - 2019</div>
              </div>
              <p style="margin: 10px 0;">Managed hospitality property operations and directly handled custom guest requests and facility readiness.</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/zfUR3wkDUres35FU6" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i> Hermagor, AT</a>
                <a href="https://www.vmglanz.at" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i> vmglanz.at</a>
                <p>VM Glanz Gmbh, 9620 Hermagor, AT</p>
              </div>
            </div>  

          </div>
        `,
    edu: `
          <div class="prompt">Education</div>
          <div class="project-grid">
            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin: 0;">ITnetwork Academy Slovakia</h3>
                <div class="tech-badge-container">
                    <small>2025</small>
                  </div>
              </div>
              <p style="margin-bottom: 12px;">OOP, web application development in Java, database management, UML modeling</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://www.itnetwork.sk" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i></a>
              </div>
            </div>

            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin: 0;">University of Economics in Bratislava</h3>
                <div class="tech-badge-container">
                    <small>2014 - 2016</small>
                  </div>
              </div>
              <p style="margin-bottom: 12px;">Faculty of International Trade (three semesters completed)</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/hKj9dK7ARJSJshZa7" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i></a>
                <a href="https://www.euba.sk" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i></a>
              </div>
            </div>

            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin: 0;">Leonard Stöckel Gymnasium in Bardejov</h3>
                <div class="tech-badge-container">
                    <small>2009 - 2013</small>
                  </div>
              </div>
              <p style="margin-bottom: 12px;">Academic Focus: Mathematics and Geography</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/hr3njGnMAe1zVMDD8" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i></a>
                <a href="https://gymlsbj.edupage.org" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i></a>
              </div>
            </div>

            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin: 0;">Michal Vilec School of Art in Bardejov</h3>
                <div class="tech-badge-container">
                    <small>2001 - 2009</small>
                  </div>
              </div>
              <p style="margin-bottom: 12px;">Painting, classical drawing, sculpting, photography, linocut</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://maps.app.goo.gl/DDBL37R9UAfFmo5B6" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-location-dot"></i></a>
                <a href="https://www.zusmvileca.com" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i></a>
              </div>
            </div>

          </div>
        `,
    neofetch: `
        <div class="warp-block">
          <div class="output-text">
            <pre style="font-family: monospace; line-height: 1.3; margin: 0;">
          ██╗██╗  ██╗    <span class="highlight">kytka9</span>@<span class="keyword">portfolio-os</span>
          ██║██║ ██╔╝    -------------------------
          ██║█████╔╝     OS: Ján Klimek WebOS v1.0.0
          ██║██╔═██╗     Kernel: Human_Brain_2026.06
        ████║██║  ██╗    Uptime: 30+ years
        ╚═══╝╚═╝  ╚═╝    Shell: kytka-sh 2.4
                         IDE: VS Code / Cursor
                         Fav-Lang: JavaScript

                        <span style="display: inline-block; width: 12px; height: 12px; background: var(--warp-accent); border-radius: 2px;"></span> <span style="display: inline-block; width: 12px; height: 12px; background: var(--warp-accent-green); border-radius: 2px;"></span> <span style="display: inline-block; width: 12px; height: 12px; background: var(--warp-text-main); border-radius: 2px;"></span> <span style="display: inline-block; width: 12px; height: 12px; background: var(--warp-text-muted); border-radius: 2px;"></span>
            </pre>
          </div>
        </div>
        `,
    about: `
          <div class="output-text" id="welcomeOutput">
          <p>...</p>
          <p>While my core technical foundation stems from an intensive multi-month academy course, my actual everyday workflow is strictly forged by today's digital landscape. In the era of AI, self-directed learning from home is more effective than ever before. I don't treat AI as a shortcut, but rather as an engineering accelerator — it enables me to dive deep into complex computing concepts, analyze architectural best practices, and constantly refactor for optimal code quality. Thanks to this modern ecosystem, I am able to stay fully up to date with shifting trends and deliver solutions that are fast, modern, and clean.</p>
          </div>
          <p>...</p>
          `,
    hobby: `
          <div class="prompt">Hobbies I Enjoy in My Free Time</div>
          <p style="margin-bottom: 12px;">🌲 Bushcraft <small style="color: var(--text-muted);">// Status: Fully offline out in the wild</small></p>
          <p style="margin-bottom: 12px;">⚔️ Age of Empires 2 <small style="color: var(--text-muted);">// Strategy Level: Expert</small></p>
          <p style="margin-bottom: 12px;">🏂 Snowboarding <small style="color: var(--text-muted);">// Gravity: Fully tested on the slopes</small></p>         
          `,
    matrix: `
          <div class="prompt">./matrix.sh</div>
          <p style="color: var(--warp-accent-green); font-weight: bold;"><i class="fas fa-user-secret"></i> Wake up, Neo... The Matrix has you !!!</p>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 5px;">Check out your developer tools console (F12) for a little surprise!</p>
        `,
    contact: `
          <div class="prompt">Contact Information & Resume</div>
          <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px;">

            <p><i class="fas fa-file-pdf" style="width: 25px; color: var(--warp-accent);"></i> <strong>Resume :</strong> <a href="#" target="_blank" class="highlight">Open Resume</a></p>

            <p><i class="fas fa-envelope" style="width: 25px; color: var(--warp-accent);"></i> <strong>Email:</strong> <span class="highlight" style="cursor: pointer;" onclick="copyToClipboard('klimekjani@gmail.com', this)">klimekjani@gmail.com</span></p>
            
            <p><i class="fab fa-github" style="width: 25px; color: var(--warp-accent);"></i> <strong>GitHub:</strong> <span class="highlight" style="cursor: pointer;"><a href="https://github.com/kytka9" target="_blank">github.com/kytka9</a></span></p>
            
            
            <p><i class="fab fa-discord" style="width: 25px; color: var(--warp-accent);"></i> <strong>Discord:</strong> <span class="highlight" style="cursor: pointer;" onclick="copyToClipboard('kytka9', this)">kytka9</span></p>
            
            <p><i class="fab fa-dev" style="width: 25px; color: var(--warp-accent);"></i> <strong>DEV.to:</strong> <span class="highlight" style="cursor: pointer;"><a href="https://dev.to/kytka9" target="_blank">dev.to/kytka9</a></span></p>
            
          </div>
        `,
  }
};

// Počúvanie na stlačenie klávesu Enter
terminalInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const rawInput = this.value.trim();
    const args = rawInput.split(' ');
    const cmd = args[0].toLowerCase();

    if (rawInput === '') return;

    // Spracovanie príkazu clear
    if (cmd === 'clear') {
      terminalBody.innerHTML = '';
      this.value = '';
      return;
    }

    // Generovanie náhodného času odozvy
    const fakeTime = (Math.random() * 0.05 + 0.01).toFixed(3);
    let output = '';

    // Spracovanie príkazu lang
    if (cmd === 'lang') {
      const targetLang = args[1] ? args[1].toLowerCase() : '';
      if (targetLang === 'sk' || targetLang === 'en') {
        currentLang = targetLang;
        document.documentElement.lang = currentLang;

        if (currentLang === 'sk') {
          output = `Jazyk bol zmenený na <span class="highlight">Slovenčinu</span>. Pre zoznam príkazov napíš <code class="keyword">help</code>.`;
          terminalInput.placeholder = "Napíš príkaz (help, ls, env, skills)...";
        } else {
          output = `Language changed to <span class="highlight">English</span>. Type <code class="keyword">help</code> to see available commands.`;
          terminalInput.placeholder = "Type a command (help, ls, env, skills)...";
        }
      } else {
        output = currentLang === 'sk'
          ? `<span style="color: #ff5f56;">Chyba: Zlý argument.</span> Použi <code class="keyword">lang sk</code> alebo <code class="keyword">lang en</code>.`
          : `<span style="color: #ff5f56;">Error: Invalid argument.</span> Use <code class="keyword">lang sk</code> or <code class="keyword">lang en</code>.`;
      }
    } else {
      // Zistenie výstupu podľa aktuálneho jazyka
      output = commands[currentLang][cmd];

      if (!output) {
        output = currentLang === 'sk'
          ? `<span style="color: #ff5f56;">Error: Príkaz "${rawInput}" nebol nájdený.</span> Použi "help".`
          : `<span style="color: #ff5f56;">Error: Command "${rawInput}" not found.</span> Use "help".`;
      }
    }

    // Ak používateľ zavolá matrix, vygenerujeme aj log do F12 konzoly
    if (cmd === 'matrix') {
      console.clear();
      console.log(
  "%c" +
  "   ________________________________\n" +
  "  |  ____________________________  |\n" +
  "  | |                            | |\n" +
  "  | |  Loading Matrix...         | |\n" +
  "  | |                            | |\n" +
  "  | |  [▓▓▓▓▓▓▓▓▓▓░░░░░░░░] 52% | |\n" +
  "  | |                            | |\n" +
  "  | |  > downloading kung-fu.js  | |\n" +
  "  | |  > patching reality.css    | |\n" +
  "  | |  > fixing IE support...    | |\n" +
  "  | |                            | |\n" +
  "  | |  ERROR:                    | |\n" +
  "  | |  Task impossible.          | |\n" +
  "  | |____________________________| |\n" +
  "  |________________________________|\n" +
  "        _______|    |_______\n" +
  "       /                    \\\n" +
  "      /______________________\\\\\n",
  `
    color: #34d399;
    background: #000;
    font-family: monospace;
    font-weight: bold;
    line-height: 1.2;
    text-shadow: 0 0 6px #34d399;
  `
);
    }

    // Vytvorenie nového Warp bloku
    const newBlock = document.createElement('div');
    newBlock.className = 'warp-block';
    newBlock.innerHTML = `
          <div class="prompt-line">
            <div>~/personal-portfolio git:(<span>master</span>)</div>
            <div>(${fakeTime}s)</div>
          </div>
          <div class="command-text">${rawInput}</div>
          <div class="output-text">${output}</div>
        `;

    // Pridanie bloku do histórie a reset inputu
    terminalBody.appendChild(newBlock);
    this.value = '';

    // Automatické posunutie na spodok terminálu
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
});

// Udržiavanie inputu stále aktívneho pri kliknutí kamkoľvek do terminálu
document.querySelector('.terminal-window').addEventListener('click', () => {
  terminalInput.focus();
});

// Kopírovanie kontaktov
function copyToClipboard(text, element) {
  navigator.clipboard.writeText(text).then(() => {
    // Uložíme si pôvodný text (kytka9)
    const originalText = element.innerText;
    
    // Zmeníme text na oznámenie o skopírovaní
    element.innerText = "Copied!";
    
    // Po 1.2 sekunde vrátime pôvodný text späť
    setTimeout(() => {
      element.innerText = originalText;
    }, 1200);
  }).catch(err => {
    console.error('Chyba pri kopírovaní: ', err);
  });
}