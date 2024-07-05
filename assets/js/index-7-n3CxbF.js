async function e(r){const t=await fetch(`https://api.github.com/users/${r}`);if(!t.ok){const s=await t.json();throw new Error(s.message||"发生错误")}return t.json()}export{e as f};
