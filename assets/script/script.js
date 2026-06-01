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
            <li><span class="highlight">env</span> - Moje developerské prostredie a setup</li>
            <li><span class="highlight">skills</span> - Technické zručnosti a technológie</li>
            <li><span class="highlight">code-pr</span> - Moje programátorské projekty</li>
            <li><span class="highlight">life-pr</span> - Osobné projekty a úspechy</li>
            <br>
            <li><span class="highlight">hobby</span> - Čomu sa venujem vo voľnom čase</li>
            <li><span class="highlight">matrix</span> - Spustí easter-egg v konzole</li>
            <li><span class="highlight">contact</span> - Zobrazí kontaktné údaje a životopis</li>
          </ul>
        `,
        ls: `
          <div class="prompt">Dostupné sekcie (príkazy):</div>
          <div style="display: flex; gap: 15px; flex-wrap: wrap; font-family: monospace;">
            <span class="highlight">lang</span> <span class="highlight">env</span> <span class="highlight">skills</span> <span class="highlight">code-pr</span> <span class="highlight">life-pr</span> <span class="highlight">hobby</span> <span class="highlight">matrix</span> <span class="highlight">contact</span> <span class="highlight">clear</span>
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
        'code-pr': `
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
                  <i class="fab fa-github"></i> GitHub Repository
                </a>
              </div>
            </div>

            <div class="project-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <h3 class="highlight" style="margin: 0;">kytka9notes</h3>
                  <div class="tech-badge-container">
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
                    <i class="fab fa-html5" style="color: #e34f26;"></i>
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
        'life-pr': `
          <div class="prompt">Projekty, ktorých som bol súčasťou</div>
          <div class="project-grid">
            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin: 0;"><i class="fa-solid fa-person-snowboarding"></i> Take a Deck</h3>
              </div>
              <p style="margin-bottom: 12px;">Organizátor kultúrno-športových podujatí pod záštitou Džizo crew. Zameranie na komunitný rozvoj a extrémne športy.</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://www.facebook.com/DzizoCrew/" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-brands fa-facebook"></i> Facebook</a>
                <a href="http://makovica.sk" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i> Makovica</a>
              </div>
            </div>

            <div class="project-card">
              <h3 class="highlight" style="margin-bottom: 10px;"><i class="fa-brands fa-redhat"></i> WeifouDilla</h3>
              <p>Kľúčový spolutvorca online módneho zoskupenia. Špecializácia na kurátorstvo, reštaurovanie a udržateľný predaj vzácnych vintage kúskov.</p>
            </div>
          </div>
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
            <p><i class="fas fa-envelope" style="width: 25px; color: var(--warp-accent);"></i> <strong>Email:</strong> <a href="mailto:klimekjani@gmail.com">klimekjani@gmail.com</a></p>
            <p><i class="fab fa-github" style="width: 25px; color: var(--warp-accent);"></i> <strong>GitHub:</strong> <a href="https://github.com/kytka9" target="_blank">github.com/kytka9</a></p>
            <p><i class="fab fa-discord" style="width: 25px; color: var(--warp-accent);"></i> <strong>Discord:</strong> <span style="color: var(--text-main);">kytka9</span></p>
            <p><i class="fab fa-dev" style="width: 25px; color: var(--warp-accent);"></i> <strong>DEV.to:</strong> <a href="https://dev.to/kytka9" target="_blank">dev.to/kytka9</a></p>
            <p><i class="fas fa-file-pdf" style="width: 25px; color: var(--warp-accent-green);"></i> <strong>Životopis (SK):</strong> <a href="https://github.com/kytka9/personal-portfolio-terminal/blob/master/resume_sk.html" target="_blank" class="highlight">Otvoriť životopis</a></p>
          </div>
        `,
        cv: `Otváram životopis... <a href="https://github.com/kytka9/personal-portfolio-terminal/blob/master/resume_sk.html" class="warp-link" target="_blank">Klikni sem pre otvorenie cv.html</a>`
      },
      en: {
        help: `
          <div class="prompt">Available commands:</div>
          <ul style="list-style: none; padding-left: 10px; line-height: 1.6;">
            <li><span class="highlight">lang [sk/en]</span> - Change language (e.g. <code class="keyword">lang sk</code>)</li>
            <li><span class="highlight">ls / help</span> - List all available commands</li>
            <li><span class="highlight">clear</span> - Clear terminal history</li>
            <br>
            <li><span class="highlight">env</span> - My development environment & setup</li>
            <li><span class="highlight">skills</span> - Technical skills and technologies</li>
            <li><span class="highlight">code-pr</span> - Coding & software projects</li>
            <li><span class="highlight">life-pr</span> - Personal projects & achievements</li>
            <br>
            <li><span class="highlight">hobby</span> - What I do in my free time</li>
            <li><span class="highlight">matrix</span> - Run console easter-egg</li>
            <li><span class="highlight">contact</span> - Display contact details & CV</li>
          </ul>
        `,
        ls: `
          <div class="prompt">Available sections (commands):</div>
          <div style="display: flex; gap: 15px; flex-wrap: wrap; font-family: monospace;">
            <span class="highlight">lang</span> <span class="highlight">env</span> <span class="highlight">skills</span> <span class="highlight">code-pr</span> <span class="highlight">life-pr</span> <span class="highlight">hobby</span> <span class="highlight">matrix</span> <span class="highlight">contact</span> <span class="highlight">clear</span>
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
          <div class="prompt">Tech Skills & Stack</div>
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
        'code-pr': `
          <div class="prompt">Showcase of my work and technical solutions</div>
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
              <p style="margin: 10px 0;">An interactive card in the form of a terminal. Introducing myself and my work with an emphasis on speed, minimalism, and semantic code.</p>
              <ul style="list-style: square; padding-left: 20px; margin: 12px 0; font-size: 0.9rem; color: var(--text-main);">
                <li>Slovak and English localization (real-time language switching)</li>
              </ul>
              <div style="margin-top: 12px;">
                <a href="https://github.com/kytka9/personal-portfolio-terminal" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: var(--bg-input); border: 1px solid var(--border-color); padding: 5px 12px; border-radius: 4px; font-size: 0.85rem;">
                  <i class="fab fa-github"></i> GitHub Repository
                </a>
              </div>
            </div>

            <div class="project-card" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <h3 class="highlight" style="margin: 0;">kytka9notes</h3>
                  <div class="tech-badge-container">
                    <i class="fab fa-js" style="color: #f7df1e;"></i>
                  </div>
                </div>
                <p style="margin-bottom: 15px;">Find code before you open Google - a handy cheat sheet for developers.</p>
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
                    <i class="fab fa-html5" style="color: #e34f26;"></i>
                  </div>
                </div>
                <p style="margin-bottom: 15px;">Interactive web platform for NHL fans. Implementation of responsive design and dynamic content.</p>
              </div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
                <a href="https://kytka9.github.io/Colorado_Avalanche_fanshub/" target="_blank" style="background: rgba(34, 211, 238, 0.1); border: 1px solid var(--accent-cyan); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fas fa-eye"></i> Live View</a>
                <a href="https://github.com/kytka9/Colorado_Avalanche_fanshub" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fab fa-github"></i> Code</a>
              </div>
            </div>

          </div>
        `,
        'life-pr': `
          <div class="prompt">Projects I have been part of</div>
          <div class="project-grid">
            <div class="project-card">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h3 class="highlight" style="margin: 0;"><i class="fa-solid fa-person-snowboarding"></i> Take a Deck</h3>
              </div>
              <p style="margin-bottom: 12px;">Organizer of cultural and sports events under the auspices of Džizo crew. Focus on community development and extreme sports.</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <a href="https://www.facebook.com/DzizoCrew/" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-brands fa-facebook"></i> Facebook</a>
                <a href="http://makovica.sk" target="_blank" style="background: var(--bg-input); border: 1px solid var(--border-color); padding: 4px 8px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-link"></i> Makovica</a>
              </div>
            </div>

            <div class="project-card">
              <h3 class="highlight" style="margin-bottom: 10px;"><i class="fa-brands fa-redhat"></i> WeifouDilla</h3>
              <p>Key co-creator of an online fashion collective. Specialization in curation, restoration, and sustainable sale of rare vintage pieces.</p>
            </div>
          </div>
        `,
        hobby: `
          <div class="prompt">My personal interests and hobbies</div>
          <p style="margin-bottom: 12px;">🌲 Bushcraft <small style="color: var(--text-muted);">// Status: Fully offline in nature</small></p>
          <p style="margin-bottom: 12px;">⚔️ Age of Empires 2 <small style="color: var(--text-muted);">// Strategy level: Expert</small></p>
          <p style="margin-bottom: 12px;">🏂 Snowboarding <small style="color: var(--text-muted);">// Gravity: Tested on slopes</small></p>
        `,
        matrix: `
          <div class="prompt">./matrix.sh</div>
          <p style="color: var(--warp-accent-green); font-weight: bold;"><i class="fas fa-user-secret"></i> Wake up, Neo... The Matrix has you !!!</p>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 5px;">Check your developer console (F12) for a surprise!</p>
        `,
        contact: `
          <div class="prompt">Contact Details & Resume</div>
          <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px;">
            <p><i class="fas fa-envelope" style="width: 25px; color: var(--warp-accent);"></i> <strong>Email:</strong> <a href="mailto:klimekjani@gmail.com">klimekjani@gmail.com</a></p>
            <p><i class="fab fa-github" style="width: 25px; color: var(--warp-accent);"></i> <strong>GitHub:</strong> <a href="https://github.com/kytka9" target="_blank">github.com/kytka9</a></p>
            <p><i class="fab fa-discord" style="width: 25px; color: var(--warp-accent);"></i> <strong>Discord:</strong> <span style="color: var(--text-main);">kytka9</span></p>
            <p><i class="fab fa-dev" style="width: 25px; color: var(--warp-accent);"></i> <strong>DEV.to:</strong> <a href="https://dev.to/kytka9" target="_blank">dev.to/kytka9</a></p>
            <p><i class="fas fa-file-pdf" style="width: 25px; color: var(--warp-accent-green);"></i> <strong>Resume (SK):</strong> <a href="https://github.com/kytka9/personal-portfolio-terminal/blob/master/resume_sk.html" target="_blank" class="highlight">Open Resume</a></p>
          </div>
        `,
        cv: `Opening resume... <a href="https://github.com/kytka9/personal-portfolio-terminal/blob/master/resume_sk.html" class="warp-link" target="_blank">Click here to open cv.html</a>`
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
              terminalInput.placeholder = "Napíš príkaz (help, ls, env, skills, code-pr)...";
            } else {
              output = `Language changed to <span class="highlight">English</span>. Type <code class="keyword">help</code> to see available commands.`;
              terminalInput.placeholder = "Type a command (help, ls, env, skills, code-pr)...";
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
          console.log("%cWake up, Neo...", "color: #34d399; font-size: 20px; font-weight: bold;");
          console.log("%cThe Matrix has you...", "color: #34d399; font-size: 14px;");
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