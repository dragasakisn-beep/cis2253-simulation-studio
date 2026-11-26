import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const load = p => readFileSync(new URL('../'+p, import.meta.url));
const html = load('index.html').toString('utf8');
const css = load('assets/cis2253-theme.css').toString('utf8');
const hero = load('assets/photography/cis2253-ethics-hero.webp');
const js = html.split('<script>')[1]?.split('</script>')[0];
test('approved new banner is installed without changing scenario artwork',()=>{
 assert.ok(html.includes('assets/cis2253-theme.css?v=1.0.0'));
 assert.ok(css.includes('photography/cis2253-ethics-hero.webp'));
 assert.ok(html.includes('dashboard-title-copy')&&html.includes('Cyber Ethics <span>Simulation Studio</span>'));
 assert.equal(hero.subarray(0,4).toString('utf8'),'RIFF');
 assert.equal(hero.subarray(8,12).toString('utf8'),'WEBP');
 assert.equal(createHash('sha256').update(hero).digest('hex'),'2aa083e3fb7f82515f3d9e6b314052ee46993e05286bc6f40b2266879d3f2d90');
 assert.ok((html.match(/--storyboard-/g)||[]).length>=8);
});
test('all eight scenarios and core learning workflows remain present',()=>{
 assert.ok(js,'missing application script');
 new Function(js);
 const match=js.match(/const cases = \[([\s\S]*?)\n\];/);
 assert.ok(match,'scenario data missing');
 assert.equal((match[0].match(/title\s*:/g)||[]).length,8);
 for(const required of ['function home()', 'function open(id)', 'function startLab(id)', 'function showReleaseForm(id)', 'function report(id)', 'function library(', 'function nextLab()', 'function needsReleaseCode(id)', 'window.print()', 'localStorage'])assert.ok(js.includes(required),required);
 assert.ok(html.includes('id="workspace"')&&html.includes('id="student"'));
});
