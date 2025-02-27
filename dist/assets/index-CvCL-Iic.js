(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();let s=0,c=[];const l=document.getElementById("balance"),u=document.getElementById("transactionList");function a(){s=0,c=[],f(),p()}function f(){l.textContent=`$${s.toFixed(2)}`}function p(){u.innerHTML=c.map(r=>`
        <tr class="border-b">
            <td class="py-2">${r.date}</td>
            <td class="${r.type==="Deposit"?"text-green-500":"text-red-500"}">
                ${r.type}
            </td>
            <td>${r.amount>0?"+":""}${r.amount.toFixed(2)}</td>
        </tr>
    `).join("")}a();
