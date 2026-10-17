/* ============================================================
   قبضك — ملف الإعدادات الوحيد اللي محتاج تعدّل فيه
   ============================================================ */
window.SITE_CONFIG = {
  // Microsoft Clarity (مجاني): clarity.microsoft.com ← New project ← Settings ← Overview ← Project ID
  // سيبه فاضي = مفيش أي تتبع بيشتغل.
  clarityId: '',

  // رابط قناة تيليجرام أو واتساب لتنبيهات تغيّر الرسوم والشروط.
  // سيبه فاضي = السكشن مش هيظهر في الموقع.
  channelUrl: '',

  instagram: 'https://www.instagram.com/qabdak.eg/'
};

/* --- من هنا مفيش تعديل --- */
(function () {
  var cfg = window.SITE_CONFIG || {};

  // تسجيل أحداث بسيطة (بتتجاهل لو Clarity مش شغال)
  window.qTrack = function (name) {
    try { if (window.clarity) window.clarity('event', name); } catch (e) {}
  };

  if (!cfg.clarityId) return;

  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', cfg.clarityId);

  // إظهار سطر الشفافية في الفوتر لما التحليلات تتفعّل
  document.addEventListener('DOMContentLoaded', function () {
    var n = document.getElementById('analytics-note');
    if (n) n.hidden = false;
  });
})();
