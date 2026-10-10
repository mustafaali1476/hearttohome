(function(){var b=document.getElementById('mb'),n=document.getElementById('nav');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
var f=document.getElementById('quote-form');if(!f)return;
var q=new URLSearchParams(location.search).get('service');if(q&&f.service.querySelector('option[value="'+q+'"]'))f.service.value=q;
function E(id,m){var e=document.getElementById('e-'+id);e.textContent=m||'';var i=f.elements[id];if(i&&i.nodeType)i.setAttribute('aria-invalid',m?'true':'false')}
f.addEventListener('submit',function(ev){ev.preventDefault();var d=Object.fromEntries(new FormData(f)),bad=0;
function c(id,m){E(id,m);if(m)bad++}
c('name',d.name.trim()?'':'Enter your name.');
c('email',/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email.trim())?'':'Enter a valid email, like name@example.com.');
c('phone',d.phone.replace(/\D/g,'').length>=10?'':'Enter a phone number with at least 10 digits.');
c('service',d.service?'':'Choose a service.');
document.getElementById('e-property').textContent=d.property?'':'Choose residential or commercial.';if(!d.property)bad++;
if(bad){var x=f.querySelector('[aria-invalid=true]');if(x)x.focus();return}
var s=f.service.options[f.service.selectedIndex].text;
var t='Hello, I would like a quote.\nService: '+s+'\nProperty: '+d.property+'\nTiming: '+(d.timing||'Flexible')+'\nName: '+d.name+'\nEmail: '+d.email+'\nPhone: '+d.phone+(d.message?'\nNotes: '+d.message:'');
var ep=f.getAttribute('data-endpoint'),ok=document.getElementById('ok'),msg=document.getElementById('ok-msg');
function done(sent){f.style.display='none';ok.classList.add('show');ok.focus();
msg.textContent=sent?'Thank you, '+d.name+'. We received your request and will follow up to discuss details. Mention your 20% first-booking offer when we talk.':'Your request is ready, but this form is not connected to an inbox yet. Send it by text with the button below, or call us.';
document.getElementById('sms').style.display=sent?'none':'inline-block';
document.getElementById('sms').href='sms:+17204778268?body='+encodeURIComponent(t)}
if(ep){fetch(ep,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)}).then(function(r){if(!r.ok)throw 0;done(true)}).catch(function(){done(false)})}else done(false)});
})();