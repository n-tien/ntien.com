/* SmtpJS.com - v3.0.0 */
var Email = {
  send: function (a) {
    return new Promise(function (n, e) {
      (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
      var t = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
        n(e);
      });
    });
  },
  ajaxPost: function (e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (a.onload = function () {
        var e = a.responseText;
        null != t && t(e);
      }),
      a.send(n);
  },
  ajax: function (e, n) {
    var t = Email.createCORSRequest("GET", e);
    (t.onload = function () {
      var e = t.responseText;
      null != n && n(e);
    }),
      t.send();
  },
  createCORSRequest: function (e, n) {
    var t = new XMLHttpRequest();
    return (
      "withCredentials" in t
        ? t.open(e, n, !0)
        : "undefined" != typeof XDomainRequest
        ? (t = new XDomainRequest()).open(e, n)
        : (t = null),
      t
    );
  },
};

let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = $("#message").val();
  let email = $("#email").val();
  let name = $("#name").val();
  if (!text || !email || !name)
    return alert("Es tut mir leid, aber etwas fehlt ..");
  Email.send({
    SecureToken: "03e699de-f107-48f3-9417-9095cad742ab",
    To: "regnosp@yahoo.de",
    From: "ntien@ntien.com",
    Subject:
      "ntien.com: <email:" +
        email +
        "> name:" +
        name +
        ", phone:" +
        $("#phone").val() || "<no tel>" + " Kunden Kontakt",
    Body: text,
  }).then((message) => alert(message));
});
