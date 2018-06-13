(function(e=window, t=document, n="Bots", r="dist") {
  function s() {
    try {
      var urlObj = ("string" == typeof this.response) ? JSON.parse(this.response) : this.response;
      //console.log(urlObj);
      if (urlObj.url) {
        var node = t.getElementsByTagName("script")[0];
        console.log(node);
        var newNode = t.createElement("script");
        newNode.async= !0;
        //console.log(urlObj.url);
        newNode.src = urlObj.url;
        node.parentNode.insertBefore(newNode, node);
        var temp = t.getElementsByTagName("script")[0];
        console.log(temp);
      }
    }
    catch(urlObj) {}
  }
  var o,p,a,i=[],c=[];
  console.log(e);
  e[n] = {
    init: function() {
      o=arguments;
      var window = {
        then: function(t) {
          return c.push({type:"t",next:t}), e;
        },
        catch: function(t) {
          return c.push({type:"c",next:t}), e;
        }
      };
      return e;
    },
    on: function() {
      i.push(arguments);
    },
    render: function() {
      p = arguments;
    },
    destroy: function() {
      a = arguments;
    }
  };
  e.__onWebMessengerHostReady__ = function(t) {
    if(delete e.__onWebMessengerHostReady__, e[n]=t, o) {
      for(var r = t.init.apply(t,o), s=0; s<c.length; s++) {
        var u = c[s];
        r= "t" === u.type ? r.then(u.next): r.catch(u.next)
      }
    }
    p&&t.render.apply(t,p), a&&t.destroy.apply(t,a);
    for(s=0; s<i.length; s++) {
      t.on.apply(t,i[s])
    }
  };
  var xmlReq = new XMLHttpRequest;
  xmlReq.addEventListener("load", s);
  xmlReq.open("GET", "dist/loader.json", !0);
  xmlReq.responseType="json";
  xmlReq.send();
})();