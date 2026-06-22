function saveScore(subject, score, max) {
  var subjectNames = {eng:'English', math:'Math', fil:'Filipino', spell:'Spelling'};
  localStorage.setItem('score_' + subject, JSON.stringify({score: score, max: max}));
  var now = new Date();
  var timeStr = now.toLocaleDateString('en-PH', {month:'short', day:'numeric'}) +
    ' ' + now.toLocaleTimeString('en-PH', {hour:'2-digit', minute:'2-digit'});
  localStorage.setItem('lastActivity', timeStr);
  var history = JSON.parse(localStorage.getItem('activityHistory') || '[]');
  history.push({subject: subjectNames[subject] || subject, score: score, max: max, time: timeStr});
  if (history.length > 30) history = history.slice(-30);
  localStorage.setItem('activityHistory', JSON.stringify(history));
  loadScoreBanner();
}

function loadScoreBanner() {
  var subjects = ['eng','math','fil','spell'];
  subjects.forEach(function(s) {
    var el = document.getElementById('sc-' + s);
    if (!el) return;
    var data = JSON.parse(localStorage.getItem('score_' + s) || 'null');
    if (data) {
      var pct = Math.round((data.score / data.max) * 100);
      el.textContent = data.score + '/' + data.max;
      el.parentElement.classList.toggle('pill-done', pct >= 80);
    }
  });
}

function showFeedback(elId, score, total) {
  var el = document.getElementById(elId);
  if (!el) return;
  var pct = Math.round((score / total) * 100);
  var msg = score === total ? '🌟 Perfect! Excellent work!' :
    pct >= 60 ? '😊 Good job! ' + score + '/' + total + ' correct.' :
    '💪 ' + score + '/' + total + ' correct. Keep practicing!';
  el.textContent = msg;
  el.className = 'feedback-box show ' + (pct >= 60 ? 'fb-good' : 'fb-low');
}
