$(window).load(function () {
  $("nav a[href*=#]:not([href=#]), .logo a[href*=#]:not([href=#])").click(
    function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var n = $(this.hash);
        if (
          ((n = n.length ? n : $("[name=" + this.hash.slice(1) + "]")),
          n.length)
        )
          return (
            $("html,body").animate({ scrollTop: n.offset().top - 75 }, 1e3), !1
          );
      }
    }
  );
}),
  $(document).ready(function () {
    $(".nav .sub-nav").each(function () {
      $self = $(this);
      var n = 0;
      $self.find("li").each(function () {
        n += parseInt($(this).innerWidth(), 10);
      }),
        $self.width(n);
    }),
      $(".enjoy-rowenta .caption p.title").each(function () {
        $(this).append("<span></span>");
      }),
      $(".nav-mobi-toggle").on("click", function (n) {
        n.preventDefault(),
          $(this).toggleClass("f-r"),
          $(".nav-mobi").toggle(),
          $("body").toggleClass("no-scroll");
      }),
      $(".nav-mobi li, nav-mobi a").on("click", function () {
        $(".nav-mobi-toggle").toggleClass("f-r"),
          $(".nav-mobi").toggle(),
          $("body").toggleClass("no-scroll");
      });
  });
