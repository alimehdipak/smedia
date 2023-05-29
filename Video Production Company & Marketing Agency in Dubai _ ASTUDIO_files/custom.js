jQuery(document).ready(function () {
  setInterval(function () {
    // toggle the class every five second
    jQuery(".pages-arrow").toggleClass("hover");
  }, 2000);
  jQuery(".plus-svg-new-2023").on("click", function () {
    jQuery(this).toggleClass("active");
    jQuery(".expanded-text-2023").slideToggle();
  });
  // strategy page to show the third project like the first one, so we added 8 empty divs
  jQuery(
    ".add-8-empty-divs .mode-masonry .iso-container > .wf-cell:nth-child(2)"
  ).after(
    "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"
  );

  // creative page
  jQuery(
    ".add-empty-divs-creative .mode-masonry .iso-container > .wf-cell:first-child"
  ).before("<div></div><div></div>");
  jQuery(
    ".add-empty-divs-creative .mode-masonry .iso-container > .wf-cell:nth-child(3)"
  ).after(
    "<div></div><div></div><div></div><div></div><div></div><div></div><div></div>"
  );

  var screen_outer_width =
    jQuery(window).width() -
    (jQuery(".wf-container-footer").offset().left +
      jQuery(".wf-container-footer").outerWidth());

  var wt = jQuery(document).width();
  // console.log(wt);

  var screen_width = jQuery("footer").width();

  // console.log(screen_width);
  // console.log(screen_outer_width);

  jQuery(".dyn-margin-right").css("margin-right", screen_outer_width + "px");
  jQuery(".dyn-margin-left").css("margin-left", screen_outer_width + "px");
  jQuery(".dyn-padding-right").css("padding-right", screen_outer_width + "px");
  jQuery(".dyn-padding-left").css("padding-left", screen_outer_width + "px");

  var dynamic_one_side_width = screen_width - screen_outer_width;

  if (wt < 1600) {
    var dynamic_one_side_menu_width = screen_width - 225;
  }

  if (wt < 1200) {
    var dynamic_one_side_menu_width = screen_width;
  }

  if (wt >= 1600) {
    var dynamic_one_side_menu_width = screen_width - screen_outer_width;
  }
  // console.log("one_side_width" + dynamic_one_side_width);
  // console.log("menu_width" + dynamic_one_side_menu_width);

  if (wt > 1200 && jQuery(".portfolio-shortcod").length) {
    jQuery(
      ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-2)"
    ).css("width", dynamic_one_side_width + 50 + "px");

    // change 1st portfolio image
    jQuery(
      ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-4) .post-thumbnail-rollover img"
    ).attr("sizes", "1920");

    var firstimgsrc = jQuery(
      ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-4) .post-thumbnail-rollover img"
    ).attr("src");
    var firstimgsrcset = jQuery(
      ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-4) .post-thumbnail-rollover img"
    ).attr("srcset");

    if (
      typeof firstimgsrc !== "undefined" &&
      typeof firstimgsrcset !== "undefined"
    ) {
      var firstsplitedstring = firstimgsrc.split("-1200x");
      var firstsplittedimgex = firstsplitedstring[1].split(".");
      var firstfinalres = "-1200x" + firstsplittedimgex[0];

      var new_firstimgsrc = firstimgsrc.replace(firstfinalres, "");

      jQuery(
        ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-4) .post-thumbnail-rollover img"
      ).attr("src", new_firstimgsrc);
      jQuery(
        ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-4) .post-thumbnail-rollover img"
      ).attr("srcset", new_firstimgsrc);
      // console.log(firstimgsrc);
    }

    // change 2nd portfolio image
    jQuery(
      ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-3) .post-thumbnail-rollover img"
    ).attr("sizes", "1920");

    var secondimgsrc = jQuery(
      ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-3) .post-thumbnail-rollover img"
    ).attr("src");
    var secondimgsrcset = jQuery(
      ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-3) .post-thumbnail-rollover img"
    ).attr("srcset");

    if (
      typeof secondimgsrc !== "undefined" &&
      typeof secondimgsrcset !== "undefined"
    ) {
      var secondsplitedstring = secondimgsrc.split("-1200x");
      var secondsplittedimgex = secondsplitedstring[1].split(".");
      var secondfinalres = "-1200x" + secondsplittedimgex[0];

      var new_secondimgsrc = secondimgsrc.replace(secondfinalres, "");

      jQuery(
        ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-3) .post-thumbnail-rollover img"
      ).attr("src", new_secondimgsrc);
      jQuery(
        ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-3) .post-thumbnail-rollover img"
      ).attr("srcset", new_secondimgsrc);
      // console.log(secondimgsrc);
    }

    // change 3rd portfolio image
    jQuery(
      ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-2) .post-thumbnail-rollover img"
    ).attr("sizes", "1920");

    var thirdimgsrc = jQuery(
      ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-2) .post-thumbnail-rollover img"
    ).attr("src");
    var thirdimgsrcset = jQuery(
      ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-2) .post-thumbnail-rollover img"
    ).attr("srcset");

    if (
      typeof thirdimgsrc !== "undefined" &&
      typeof thirdimgsrcset !== "undefined"
    ) {
      var thirdsplitedstring = thirdimgsrc.split("-1200x");
      var thirdsplittedimgex = thirdsplitedstring[1].split(".");
      var thirdfinalres = "-1200x" + thirdsplittedimgex[0];

      var new_thirdimgsrc = thirdimgsrc.replace(thirdfinalres, "");

      jQuery(
        ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-2) .post-thumbnail-rollover img"
      ).attr("src", new_thirdimgsrc);
      jQuery(
        ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell:nth-of-type(5n-2) .post-thumbnail-rollover img"
      ).attr("srcset", new_thirdimgsrc);
      // console.log(thirdimgsrc);
    }
  }

  // Header Section CSS
  jQuery(".home-header-section").css("background-size", wt - 225 + "px");

  // Dynamic Margin CSS
  var newStyles = document.createElement("style");
  jQuery("footer").append(newStyles);

  newStyles.innerHTML =
    ".right-screen-margin {" +
    "width: " +
    dynamic_one_side_width +
    "px !important;" +
    "left: unset !important;" +
    "right: 0 !important;" +
    "}.left-screen-margin {" +
    "width: " +
    dynamic_one_side_width +
    "px !important;" +
    "right: unset !important;" +
    "left: 0 !important;" +
    "}";

  // Change Behind-the-scenes to use cases

  jQuery(
    '.services-menu-wrapper .services-menu-container a[title="behind-the-scenes"] span.menu-title'
  ).text("case studies");

  // Home Page Menu
  setTimeout(function () {
    jQuery("body.home .dt-mobile-header").before(
      "<div class='dt-mobile-header home-top-menu'>" +
        jQuery(".dt-mobile-header").clone().html() +
        "</div>"
    );

    if (wt < 1600 && wt > 1200) {
      var dynamic_pad = 225 - (wt - 1300) / 2;

      if (dynamic_pad >= 225) {
        dynamic_pad = 225;
      }
      //console.log('menu-pad:'+dynamic_pad);

      jQuery("body.home .dt-mobile-header.home-top-menu").css(
        "max-width",
        "225px"
      );
      jQuery("body.home .dt-mobile-header.home-top-menu").css("width", "225px");
      // jQuery("body.home .mobile-header-bar").css(
      //   "padding-right",
      //   dynamic_pad + "px"
      // );
      jQuery("body.home #page").addClass("show-mobile-header");
      jQuery("body.home .dt-mobile-header.home-top-menu").addClass("show");
    }

    if (wt >= 1600) {
      jQuery(".dt-mobile-header").css("max-width", "225px");
      jQuery(".dt-mobile-header").css("width", "225px");
      jQuery("body.home #page").addClass("show-mobile-header");
      jQuery("body.home .dt-mobile-header.home-top-menu").addClass("show");
    }

    jQuery(".dt-mobile-menu-icon.floating-btn").css(
      "right",
      screen_outer_width + "px"
    );

    jQuery(document).on("click", ".dt-mobile-menu-icon", function () {
      jQuery(".dt-mobile-header").toggleClass("fixed-position");
    });

    jQuery(document).on("click", ".dt-close-mobile-menu-icon", function () {
      jQuery(".dt-mobile-header").removeClass("show");
      jQuery(".dt-mobile-header").removeClass("fixed-position");
      jQuery("#page").removeClass("show-mobile-header");
      jQuery("#page").addClass("closed-mobile-header");
      jQuery(".dt-mobile-menu-icon").removeClass("active");
    });

    window.addEventListener("scroll", () => {
      const topScroll = window.pageYOffset;

      //console.log(topScroll);
      jQuery(".dt-mobile-header").removeClass("show");
      jQuery(".dt-mobile-header").removeClass("fixed-position");
      jQuery("#page").removeClass("show-mobile-header");
      jQuery("#page").addClass("closed-mobile-header");
      jQuery(".dt-mobile-menu-icon").removeClass("active");

      if (wt <= 1200) {
        jQuery(".dt-mobile-header").css("opacity", "0");
      }

      if (topScroll >= 100) {
        jQuery("body").addClass("sticky-header");
        jQuery(".fixed-contact-label").show();
      }
      if (topScroll < 100) {
        jQuery("body").removeClass("sticky-header");
      }

      // if (topScroll <= 200) {
      // 	jQuery(".dt-mobile-header").removeClass("fixed-position");
      // }
    });

    if (wt >= 768) {
      var home_second_section = 740;
    }

    if (wt > 1200) {
      var home_second_section = 850;
    }

    var header_banner_height = jQuery(".home-header-section").outerHeight(true);
    var menu_height = jQuery(".dt-mobile-header").outerHeight(true);
    var header_height = jQuery(".masthead.inline-header").outerHeight(true);
    var left_layer_height = jQuery(
      ".home-header-background .left-layer"
    ).outerHeight(true);

    var menu_top = (header_banner_height - menu_height) / 2 + header_height;

    if (wt > 1200) {
      jQuery("body.home .dt-mobile-header.home-top-menu").css(
        "top",
        menu_top + "px"
      );
    }

    var header_left_bg_size =
      header_height +
      header_banner_height +
      home_second_section -
      left_layer_height;
    var header_right_size =
      header_height + header_banner_height + home_second_section;

    jQuery(".home-header-background .left-layer").css(
      "top",
      header_left_bg_size + "px"
    );
    jQuery(".home-header-background .right-layer img").css(
      "height",
      header_right_size + "px"
    );
  }, 500);

  setTimeout(function () {
    jQuery(
      ".dt-mobile-header.home-top-menu .mobile-main-nav li.has-children"
    ).each(function () {
      var b = jQuery(this),
        c = b.find(" > .sub-nav, .sub-menu, .vertical-sub-nav");
      b
        .find(".sub-nav li, .sub-menu li, .vertical-sub-nav li")
        .hasClass("act") && b.addClass("active"),
        b
          .find(".sub-nav li.act, .sub-menu li.act, .vertical-sub-nav li.act")
          .hasClass("act") &&
          (b.addClass("open-sub"),
          c.stop(!0, !0).slideDown(100),
          c.layzrInitialisation()),
        b.find(" > .next-level-button").on("click", function (b) {
          var d = jQuery(this).parent();
          d.hasClass("active")
            ? (c.stop(!0, !0).slideUp(500, function () {
                jQuery(" .main-nav").layzrInitialisation();
              }),
              d.removeClass("active"),
              d.removeClass("open-sub"),
              d.find("a").removeClass("act"))
            : (d
                .siblings()
                .find(" .sub-nav, .dt-mega-menu-wrap, .sub-menu")
                .stop(!0, !0)
                .slideUp(400),
              c.stop(!0, !0).slideDown(500),
              d.siblings().removeClass("active"),
              d.addClass("active"),
              d.siblings().removeClass("open-sub"),
              d.addClass("open-sub"),
              d.siblings().find("> a").removeClass("act"),
              d.find("a").addClass("act"),
              jQuery(" .main-nav").layzrInitialisation());
        });
    });
  }, 2000);

  // Dropdown CSS
  jQuery(".dt-mobile-header").addClass("opened-menu");
  jQuery(".opened-menu").css("right", screen_outer_width + "px");

  jQuery(document).on("click", ".dt-mobile-menu-icon", function () {
    var screen_outer_width =
      jQuery(window).width() -
      (jQuery(this).offset().left + jQuery(this).outerWidth());

    jQuery(".right-mobile-menu .show-mobile-header .dt-mobile-header").css(
      "opacity",
      1
    );
    jQuery(".right-mobile-menu .closed-mobile-header .dt-mobile-header").css(
      "opacity",
      0
    );
    jQuery(".opened-menu").css("right", screen_outer_width + "px");
    jQuery(".opened-menu").css("right", screen_outer_width + "px");
    jQuery(".dt-mobile-header").toggleClass("show");
  });

  jQuery(document).on("click", ".fixed-contact-label", function () {
    //jQuery(".fixed-contact-container").toggleClass("active");
    jQuery(".cform-popup-container").addClass("fixed-position");
    //jQuery(this).hide();
  });

  jQuery(document).on("click", ".cform-close-icon", function () {
    jQuery(".cform-popup-container").removeClass("fixed-position");
    // setTimeout(function(){
    // 	jQuery('.fixed-contact-label').show();
    // }, 300);
  });

  // Testimonial Paginator
  setTimeout(function () {
    var total_review_pages_desktop = jQuery(
      ".testimonial-section .hide-desktop .paginator a.page"
    )
      .last()
      .attr("data-page");
    jQuery(
      "<span class='total_reviews'>&nbsp; / " +
        total_review_pages_desktop +
        "</span>"
    ).insertAfter(
      jQuery(".testimonial-section .hide-desktop .paginator a.page").last()
    );

    var total_review_pages_mobile = jQuery(
      ".testimonial-section .hide-mobile .paginator a.page"
    )
      .last()
      .attr("data-page");
    jQuery(
      "<span class='total_reviews'>&nbsp; / " +
        total_review_pages_mobile +
        "</span>"
    ).insertAfter(
      jQuery(".testimonial-section .hide-mobile .paginator a.page").last()
    );
  }, 3000);

  jQuery(document).on("click", ".nav-next, .nav-prev", function () {
    var total_review_pages_desktop = jQuery(
      ".testimonial-section .hide-desktop .paginator a.page"
    )
      .last()
      .attr("data-page");
    jQuery(
      "<span class='total_reviews'>&nbsp; / " +
        total_review_pages_desktop +
        "</span>"
    ).insertAfter(
      jQuery(".testimonial-section .hide-desktop .paginator a.page").last()
    );

    var total_review_pages_mobile = jQuery(
      ".testimonial-section .hide-mobile .paginator a.page"
    )
      .last()
      .attr("data-page");
    jQuery(
      "<span class='total_reviews'>&nbsp; / " +
        total_review_pages_mobile +
        "</span>"
    ).insertAfter(
      jQuery(".testimonial-section .hide-mobile .paginator a.page").last()
    );
  });

  // Single Services Section
  jQuery(
    ".services-single-portfolio .home-side-vimeo-video:nth-of-type(1)"
  ).addClass("activeisible");
  jQuery(".digital-service-heading").hover(function () {
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(1)"
    ).addClass("activeisible");
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(2)"
    ).removeClass("activeisible");
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(3)"
    ).removeClass("activeisible");
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(4)"
    ).removeClass("activeisible");
  });

  jQuery(".production-service-heading").hover(function () {
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(2)"
    ).addClass("activeisible");
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(1)"
    ).removeClass("activeisible");
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(3)"
    ).removeClass("activeisible");
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(4)"
    ).removeClass("activeisible");
  });

  jQuery(".creative-service-heading").hover(function () {
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(3)"
    ).addClass("activeisible");
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(1)"
    ).removeClass("activeisible");
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(2)"
    ).removeClass("activeisible");
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(4)"
    ).removeClass("activeisible");
  });

  jQuery(".strategy-service-heading").hover(function () {
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(4)"
    ).addClass("activeisible");
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(1)"
    ).removeClass("activeisible");
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(2)"
    ).removeClass("activeisible");
    jQuery(
      ".services-single-portfolio .home-side-vimeo-video:nth-of-type(3)"
    ).removeClass("activeisible");
  });

  // Append services
  if (wt <= 1200) {
    jQuery(".strategy-service-heading .uvc-sub-heading h5")
      .after(
        jQuery(
          ".services-single-portfolio .home-side-vimeo-video:nth-of-type(1)"
        ).clone()
      )
      .html();

    jQuery(".creative-service-heading .uvc-sub-heading h5")
      .after(
        jQuery(
          ".services-single-portfolio .home-side-vimeo-video:nth-of-type(2)"
        ).clone()
      )
      .html();

    jQuery(".production-service-heading .uvc-sub-heading h5")
      .after(
        jQuery(
          ".services-single-portfolio .home-side-vimeo-video:nth-of-type(3)"
        ).clone()
      )
      .html();

    jQuery(".digital-service-heading .uvc-sub-heading h5")
      .after(
        jQuery(
          ".services-single-portfolio .home-side-vimeo-video:nth-of-type(4)"
        ).clone()
      )
      .html();

    jQuery(
      ".about-fourth-section .vc_column-inner .portfolio-shortcode .wf-cell .post-thumbnail a.post-thumbnail-rollover img"
    ).attr(
      "src",
      jQuery(
        ".about-fourth-section .vc_column-inner .portfolio-shortcode .wf-cell .post-thumbnail a.post-thumbnail-rollover img"
      ).attr("data-src")
    );
  }

  // Append Portfolio BG Overlay
  jQuery(
    ".masonary-portfolio-section .vc_column-inner .portfolio-shortcode .wf-cell .post-thumbnail-wrap .post-thumbnail"
  )
    .after('<span class="background-olay"></span>')
    .html();

  // Append Team BG Overlay
  jQuery(".team-list .wf-cell .team-container .team-media a")
    .after('<span class="background-overlay"></span>')
    .html();

  setTimeout(function () {
    jQuery(".team-list .dt-owl-item .team-container .team-media a")
      .after('<span class="background-overlay"></span>')
      .html();
  }, 3000);

  // Append Image BG Overlay
  jQuery(".image-bg-overlay .vc_single_image-wrapper")
    .after('<span class="background-overlay"></span>')
    .html();

  // Home Services Toggle
  jQuery(document).on(
    "click",
    ".services-single-portfolio-headings .uvc-heading .vc_icon_element-icon",
    function () {
      jQuery(this).toggleClass("open");
      jQuery(this)
        .parent(".uvc-heading")
        .children(".uvc-sub-heading")
        .children("p")
        .slideToggle("500");
    }
  );

  jQuery(".services-single-portfolio-headings .uvc-heading .uvc-sub-heading")
    .before(
      '<span class="vc_icon_element-icon icomoon-the7-font-the7-plus-00"></span>'
    )
    .html();

  // Services Toggle Icon
  jQuery(".services-inner-row-second").hide();
  jQuery(document).on("click", ".services-toggle-icon", function () {
    jQuery(this).toggleClass("open");
    jQuery(this)
      .parent(".wpb_wrapper")
      .children(".services-inner-row-second")
      .slideToggle("500");
  });

  jQuery(document).on(
    "click",
    ".services-strategy-section .services-inner-heading-column .uvc-main-heading",
    function () {
      jQuery(".services-strategy-section .services-toggle-icon").toggleClass(
        "open"
      );
      jQuery(
        ".services-strategy-section .services-inner-row-second"
      ).slideToggle("500");
    }
  );

  jQuery(document).on(
    "click",
    ".services-creative-section .services-inner-heading-column .uvc-main-heading",
    function () {
      jQuery(".services-creative-section .services-toggle-icon").toggleClass(
        "open"
      );
      jQuery(
        ".services-creative-section .services-inner-row-second"
      ).slideToggle("500");
    }
  );

  jQuery(document).on(
    "click",
    ".services-production-section .services-inner-heading-column .uvc-main-heading",
    function () {
      jQuery(".services-production-section .services-toggle-icon").toggleClass(
        "open"
      );
      jQuery(
        ".services-production-section .services-inner-row-second"
      ).slideToggle("500");
    }
  );

  jQuery(document).on(
    "click",
    ".services-digital-section .services-inner-heading-column .uvc-main-heading",
    function () {
      jQuery(".services-digital-section .services-toggle-icon").toggleClass(
        "open"
      );
      jQuery(
        ".services-digital-section .services-inner-row-second"
      ).slideToggle("500");
    }
  );

  jQuery(document).on(
    "click",
    ".services-social-section .services-inner-heading-column .uvc-main-heading",
    function () {
      jQuery(".services-social-section .services-toggle-icon").toggleClass(
        "open"
      );
      jQuery(".services-social-section .services-inner-row-second").slideToggle(
        "500"
      );
    }
  );

  jQuery(document).on(
    "click",
    ".services-accordion .vc_toggle_title",
    function () {
      jQuery(this).toggleClass("open");
    }
  );

  // Home Use Cases After Icon

  jQuery(".home-uc-inner-row .wpb_column .wpb_single_image a img")
    .after('<span class="icomoon-the7-font-the7-arrow-35"></span>')
    .html();

  jQuery(
    ".home-uc-inner-row .third-column.wpb_column .cover_vimeo_video .iframe-container iframe,.spec-home.home-uc-inner-row .wpb_column .cover_vimeo_video .iframe-container iframe"
  )
    .after(
      '<a href="/production-services/video-production/"><span class="icomoon-the7-font-the7-arrow-35"></span></a>'
    )
    .html();

  jQuery(
    ".home-uc-inner-row .fifth-column.wpb_column .cover_vimeo_video .iframe-container iframe"
  )
    .after(
      '<a href="/digital-marketing-agency/azza-fahmy-real-love/"><span class="icomoon-the7-font-the7-arrow-35"></span></a>'
    )
    .html();

  if (wt <= 767) {
    // jQuery(".have-video-background.services-header-section .cover_vimeo_video").prepend('<img class="mobile-services-line" alt="Astudio" src="https://astudio.ae/wp-content/uploads/2021/04/services-blueline-mobile.png">');
    jQuery(
      ".have-video-background.services-header-section .cover_vimeo_video"
    ).prepend(
      '<img class="mobile-services-line" alt="Astudio" src="https://astudio.ae/wp-content/uploads/2021/05/vidoe-production-mobile.png">'
    );
  }

  jQuery(
    ".home-uc-inner-row .wpb_column .wpb_single_image .vc_figure, .home-uc-inner-row .wpb_column .cover_vimeo_video .iframe-container iframe"
  )
    .after('<span class="background-olay"></span>')
    .html();

  if (wt <= 1200) {
    jQuery(
      ".services-page .vc_column-inner .portfolio-shortcode .wf-cell .post-thumbnail-wrap .post-thumbnail"
    )
      .after('<span class="background-overlay"></span>')
      .html();
    jQuery(".case-study-inner-first-column").after(
      "<div class='cs-first-cloned-text-column'>" +
        jQuery(".cs-first-text-column .wpb_text_column").clone().html() +
        "</div>"
    );
    jQuery(".common-portfolio-carousel article .post-thumbnail-wrap").before(
      jQuery(
        ".common-portfolio-carousel article .post-entry-content .entry-meta"
      )
        .clone()
        .html()
    );
  }

  if (wt <= 1200 && wt >= 768) {
    jQuery(".services-header-section")
      .after(jQuery(".services-header-section-column").clone())
      .html();
    jQuery("body.single-portfolio .fancy-header")
      .after(jQuery(".fancy-title-head").clone())
      .html();
  }

  // Append Service Image
  if (wt <= 767) {
    jQuery(
      ".services-strategy-section .services-inner-image-column .wpb_single_image .vc_single_image-wrapper"
    ).css(
      "background-image",
      "url(" +
        jQuery(
          ".services-strategy-section .services-inner-image-column .wpb_single_image .vc_single_image-wrapper img"
        ).attr("src") +
        ")"
    );
    jQuery(
      ".services-creative-section .services-inner-image-column .wpb_single_image .vc_single_image-wrapper"
    ).css(
      "background-image",
      "url(" +
        jQuery(
          ".services-creative-section .services-inner-image-column .wpb_single_image .vc_single_image-wrapper img"
        ).attr("src") +
        ")"
    );
    jQuery(
      ".services-production-section .services-inner-image-column .wpb_single_image .vc_single_image-wrapper"
    ).css(
      "background-image",
      "url(" +
        jQuery(
          ".services-production-section .services-inner-image-column .wpb_single_image .vc_single_image-wrapper img"
        ).attr("src") +
        ")"
    );
    jQuery(
      ".services-digital-section .services-inner-image-column .wpb_single_image .vc_single_image-wrapper"
    ).css(
      "background-image",
      "url(" +
        jQuery(
          ".services-digital-section .services-inner-image-column .wpb_single_image .vc_single_image-wrapper img"
        ).attr("src") +
        ")"
    );

    setTimeout(function () {
      jQuery(
        ".services-page .services-inner-image-column .services-side-vimeo-video .wpb_wrapper"
      ).css(
        "height",
        +(
          (jQuery(
            ".services-page .services-inner-image-column .services-side-vimeo-video"
          ).outerWidth() *
            382) /
          800
        ) + "px"
      );

      jQuery(
        ".services-strategy-section .services-inner-row-first .uvc-heading .uvc-main-heading"
      ).css(
        "margin-bottom",
        +(
          jQuery(
            ".services-strategy-section .services-inner-image-column .services-side-vimeo-video"
          ).height() + 60
        ) + "px"
      );
      jQuery(
        ".services-creative-section .services-inner-row-first .uvc-heading .uvc-main-heading"
      ).css(
        "margin-bottom",
        +(
          jQuery(
            ".services-creative-section .services-inner-image-column .services-side-vimeo-video"
          ).height() + 60
        ) + "px"
      );
      jQuery(
        ".services-production-section .services-inner-row-first .uvc-heading .uvc-main-heading"
      ).css(
        "margin-bottom",
        +(
          jQuery(
            ".services-production-section .services-inner-image-column .services-side-vimeo-video"
          ).height() + 60
        ) + "px"
      );
      jQuery(
        ".services-digital-section .services-inner-row-first .uvc-heading .uvc-main-heading"
      ).css(
        "margin-bottom",
        +(
          jQuery(
            ".services-digital-section .services-inner-image-column .services-side-vimeo-video"
          ).height() + 60
        ) + "px"
      );

      // jQuery(".services-page .services-inner-row-first .services-inner-image-column .services-side-vimeo-video iframe").after(jQuery(".services-page .services-toggle-icon").first().clone()).html();
      jQuery(".services-page .vc_row .default-btn-shortcode")
        .after(jQuery(".services-page .services-toggle-icon").first().clone())
        .html();
    }, 2000);

    jQuery(document).on(
      "click",
      ".services-strategy-section .services-toggle-icon",
      function () {
        jQuery(
          ".services-strategy-section .services-inner-row-second"
        ).slideToggle("500");
      }
    );

    jQuery(document).on(
      "click",
      ".services-creative-section .services-toggle-icon",
      function () {
        jQuery(
          ".services-creative-section .services-inner-row-second"
        ).slideToggle("500");
      }
    );

    jQuery(document).on(
      "click",
      ".services-production-section .services-toggle-icon",
      function () {
        jQuery(
          ".services-production-section .services-inner-row-second"
        ).slideToggle("500");
      }
    );

    jQuery(document).on(
      "click",
      ".services-digital-section .services-toggle-icon",
      function () {
        jQuery(
          ".services-digital-section .services-inner-row-second"
        ).slideToggle("500");
      }
    );

    jQuery(".services-header-section").before(
      "<div class='mobile-services-header'>" +
        jQuery(".services-header-section-column .uvc-main-heading")
          .clone()
          .html() +
        "</div>"
    );
    jQuery(".services-header-section").after(
      "<div class='mobile-services-subheader'>" +
        jQuery(".services-header-section-column .uvc-sub-heading")
          .clone()
          .html() +
        "</div>"
    );

    jQuery("body.single-portfolio .fancy-header")
      .before(jQuery(".fancy-title-head .fancy-title").clone())
      .html();
    jQuery("body.single-portfolio .fancy-header")
      .after(jQuery(".fancy-title-head .fancy-excerpt").clone())
      .html();

    jQuery("body .home-header-section").after(
      "<div class='home-mobile-button-link'>" +
        jQuery(
          "body .home-header-section .home-header-section-column .btn-align-left"
        )
          .clone()
          .html() +
        "</div>"
    );
  }

  // Single Portfolio Carousel
  setTimeout(function () {
    var total_portfolios = jQuery(
      ".common-portfolio-carousel .owl-dots .owl-dot"
    ).length;

    var listItem = jQuery(".active");
    var active_number =
      jQuery(".common-portfolio-carousel .owl-dots .owl-dot.active").index() +
      1;

    jQuery(".common-portfolio-carousel .owl-nav .owl-prev").after(
      "<div class='owl-counts'>" +
        active_number +
        " / " +
        total_portfolios +
        "</div>"
    );
  }, 3000);

  jQuery(document).on(
    "click",
    ".common-portfolio-carousel .owl-nav .owl-next, .common-portfolio-carousel .owl-nav .owl-prev",
    function () {
      var total_portfolios = jQuery(
        ".common-portfolio-carousel .owl-dots .owl-dot"
      ).length;

      var listItem = jQuery(".active");
      var active_number =
        jQuery(".common-portfolio-carousel .owl-dots .owl-dot.active").index() +
        1;

      jQuery(".common-portfolio-carousel .owl-nav .owl-counts").html(
        active_number + " / " + total_portfolios
      );
    }
  );

  jQuery(
    ".wonderplugin-gridgallery-item-text .wonderplugin-gridgallery-item-wrapper .wonderplugin-gridgallery-item-button a button"
  ).text("");

  // Update Case Study Count
  jQuery(
    ".services-menu-wrapper .services-menu-container a[title='video'] span.item-count"
  ).text("12");
  jQuery(
    ".services-menu-wrapper .services-menu-container a[title='photography'] span.item-count"
  ).text("99+");
  jQuery(
    ".services-menu-wrapper .services-menu-container a[title='behind-the-scenes'] span.item-count"
  ).text("4");

  // Portfolio inner excerpt replace
  if (
    jQuery(".portfolio-inner-excerpt-row-hidden .portfolio-header-excerpt-text")
      .length
  ) {
    jQuery(".fancy-header .fancy-excerpt").text(
      jQuery(
        ".portfolio-inner-excerpt-row-hidden .portfolio-header-excerpt-text"
      ).text()
    );
  }

  // Contact Toggle Icon
  jQuery(".contact-inner-row-second").hide();
  jQuery(".contact-inner-row-third").hide();

  jQuery(document).on(
    "click",
    ".contact-first-row .contact-toggle-icon",
    function () {
      jQuery(this).toggleClass("open");
      jQuery(
        ".contact-first-row .contact-inner-row-first .uvc-sub-heading"
      ).slideToggle("500");
      jQuery(".contact-first-row .contact-inner-row-second").slideToggle("500");
    }
  );

  jQuery(document).on(
    "click",
    ".contact-second-row .contact-toggle-icon",
    function () {
      jQuery(this).toggleClass("open");
      jQuery(
        ".contact-second-row .contact-inner-row-first .uvc-sub-heading"
      ).slideToggle("500");
      jQuery(".contact-second-row .contact-inner-row-second").slideToggle(
        "500"
      );
    }
  );

  jQuery(".contact-first-row .fw-input-container input").keypress(function (e) {
    var code = e.keyCode || e.which;

    if (code === 13) {
      if (
        jQuery(".contact-first-row .fw-button-next").css("display") != "none"
      ) {
        jQuery(".contact-first-row .fw-button-next").trigger("click");
        if (
          jQuery(".contact-second-row .contact-toggle-icon").hasClass("open")
        ) {
          jQuery(".contact-second-row .contact-toggle-icon").trigger("click");
        }
        //jQuery(".contact-second-row .contact-inner-row-second").hide();
      } else {
        jQuery(".contact-first-row .fw-btn-submit").trigger("click");
        jQuery(".contact-first-row .contact-inner-row-third").css(
          "display",
          "block"
        );
      }
    }
  });

  jQuery(".contact-second-row .fw-input-container input").keypress(function (
    e
  ) {
    var code = e.keyCode || e.which;

    if (code === 13) {
      if (
        jQuery(".contact-second-row .fw-button-next").css("display") != "none"
      ) {
        // jQuery(".contact-first-row .contact-inner-row-second").hide();
        if (
          jQuery(".contact-first-row .contact-toggle-icon").hasClass("open")
        ) {
          jQuery(".contact-first-row .contact-toggle-icon").trigger("click");
        }
        jQuery(".contact-second-row .fw-button-next").trigger("click");
      } else {
        jQuery(".contact-second-row .fw-btn-submit").trigger("click");
        jQuery(".contact-second-row .contact-inner-row-third").css(
          "display",
          "block"
        );
      }
    }
  });

  jQuery(".home-bse-content-section .home-bse-heading .uvc-sub-heading").hide();
  // jQuery(".home-bse-content-section .home-bse-heading .uvc-main-heading").hover(
  //   function () {
  //     jQuery(this).addClass("active");
  //     jQuery(this)
  //       .parent(".uvc-heading")
  //       .children(".uvc-sub-heading")
  //       .slideToggle("500");
  //   },
  //   function () {
  //     jQuery(this).delay(2000).removeClass("active");
  //     jQuery(this)
  //       .parent(".uvc-heading")
  //       .children(".uvc-sub-heading")
  //       .delay(2000)
  //       .slideToggle("500");
  //   }
  // );
  jQuery(".home-bse-content-section .home-bse-heading .uvc-main-heading").on(
    "click",
    function () {
      jQuery(this).toggleClass("active");
      jQuery(this)
        .parent(".uvc-heading")
        .children(".uvc-sub-heading")
        .slideToggle("500");
    }
  );
  // Photography Scroll to Here

  if (jQuery("#landhere").length) {
    jQuery([document.documentElement, document.body]).animate(
      {
        scrollTop: jQuery("#landhere").offset().top - 50,
      },
      2000
    );
  }

  jQuery(document).on("click", ".cform-close-icon", function () {
    jQuery(".cform-popup-container").removeClass("fixed-position");
  });

  // Home Use Cases Dynamic Height

  jQuery(window).on("load resize", function (e) {
    /* First Colum */
    jQuery(
      ".home-uc-inner-row .first-column .wpb_single_image, .home-uc-inner-row .first-column .wpb_single_image .vc_figure, .home-uc-inner-row .first-column .wpb_single_image .vc_figure a"
    ).css(
      "max-height",
      +(
        (jQuery(
          ".home-uc-inner-row .first-column .wpb_single_image .vc_figure a"
        ).outerWidth() *
          520) /
        532
      ) + "px"
    );
    jQuery(
      ".home-uc-inner-row .first-column .wpb_single_image .vc_figure a img"
    ).css(
      "height",
      +(
        (jQuery(
          ".home-uc-inner-row .first-column .wpb_single_image .vc_figure a"
        ).outerWidth() *
          520) /
        532
      ) + "px"
    );

    /* Second Colum */
    jQuery(
      ".home-uc-inner-row .second-column .wpb_single_image, .home-uc-inner-row .second-column .wpb_single_image .vc_figure, .home-uc-inner-row .second-column .wpb_single_image .vc_figure a"
    ).css(
      "max-height",
      +(
        (jQuery(
          ".home-uc-inner-row .second-column .wpb_single_image .vc_figure a"
        ).outerWidth() *
          644) /
        588
      ) + "px"
    );
    jQuery(
      ".home-uc-inner-row .second-column .wpb_single_image .vc_figure a img"
    ).css(
      "height",
      +(
        (jQuery(
          ".home-uc-inner-row .second-column .wpb_single_image .vc_figure a"
        ).outerWidth() *
          644) /
        588
      ) + "px"
    );

    /* Third Colum */
    jQuery(
      ".home-uc-inner-row .third-column .cover_vimeo_video, .home-uc-inner-row .third-column .cover_vimeo_video .wpb_wrapper, .home-uc-inner-row .third-column .cover_vimeo_video .wpb_wrapper .iframe-container"
    ).css(
      "height",
      +(
        (jQuery(
          ".home-uc-inner-row .third-column .cover_vimeo_video .iframe-container"
        ).outerWidth() *
          586) /
        1042
      ) + "px"
    );

    /* Fourth Colum */
    jQuery(
      ".home-uc-inner-row .fourth-column .wpb_single_image, .home-uc-inner-row .fourth-column .wpb_single_image .vc_figure, .home-uc-inner-row .fourth-column .wpb_single_image .vc_figure a"
    ).css(
      "max-height",
      +(
        (jQuery(
          ".home-uc-inner-row .fourth-column .wpb_single_image .vc_figure a"
        ).outerWidth() *
          400) /
        600
      ) + "px"
    );
    jQuery(
      ".home-uc-inner-row .fourth-column .wpb_single_image .vc_figure a img"
    ).css(
      "height",
      +(
        (jQuery(
          ".home-uc-inner-row .fourth-column .wpb_single_image .vc_figure a"
        ).outerWidth() *
          400) /
        600
      ) + "px"
    );

    /* Fifth Colum */
    jQuery(
      ".home-uc-inner-row .fifth-column .wpb_single_image, .home-uc-inner-row .fifth-column .wpb_single_image .vc_figure, .home-uc-inner-row .fifth-column .wpb_single_image .vc_figure a"
    ).css(
      "max-height",
      +(
        (jQuery(
          ".home-uc-inner-row .fifth-column .wpb_single_image .vc_figure a"
        ).outerWidth() *
          644) /
        515
      ) + "px"
    );
    jQuery(
      ".home-uc-inner-row .fifth-column .wpb_single_image .vc_figure a img"
    ).css(
      "height",
      +(
        (jQuery(
          ".home-uc-inner-row .fifth-column .wpb_single_image .vc_figure a"
        ).outerWidth() *
          644) /
        515
      ) + "px"
    );

    jQuery(
      ".home-uc-inner-row .fifth-column .cover_vimeo_video, .home-uc-inner-row .fifth-column .cover_vimeo_video .wpb_wrapper, .home-uc-inner-row .fifth-column .cover_vimeo_video .wpb_wrapper .iframe-container"
    ).css(
      "height",
      +(
        (jQuery(
          ".home-uc-inner-row .fifth-column .cover_vimeo_video .iframe-container"
        ).outerWidth() *
          644) /
        515
      ) + "px"
    );

    // Scroll Text
    setTimeout(function () {
      if (jQuery("body .white-outlined-text").length) {
        const checkpointdata = jQuery(".white-outlined-text").offset();
        const section_width = document.getElementsByClassName(
          "white-outlined-text"
        )[0].scrollWidth;

        const scroll_ratio = section_width / jQuery(window).height();
        //const scroll_ratio_offset = 200/jQuery(window).height();

        if (wt > 1200) {
          var total_ratio = scroll_ratio - 1.3;
          var checkpoint = checkpointdata.top - jQuery(window).height() + 150;
        } else {
          var total_ratio = scroll_ratio - 0.2;
          var checkpoint = checkpointdata.top - jQuery(window).height() + 100;
        }

        // if (wt > 767 && wt < 1200) {
        // 	var total_ratio = scroll_ratio;
        // 	var checkpoint = (checkpointdata.top-jQuery(window).height())+250;
        // }

        window.addEventListener("scroll", () => {
          const currentScroll = window.pageYOffset;

          // console.log(section_width);
          // console.log(currentScroll);
          // console.log(checkpoint);
          // console.log('ratio: '+total_ratio);

          if (currentScroll >= checkpoint) {
            var left = checkpoint - currentScroll;
            var left = left * total_ratio;

            var right = currentScroll - checkpoint;
            var right = right * total_ratio;
          } else {
            var left = 0;
            var right = 0;
          }

          jQuery(".white-outlined-text").css("left", left);
          jQuery(".white-outlined-text.scroll-right").css("left", right);
        });
      }
      // Get the container
      var container = jQuery(".clients-logos-s-container");

      // Set the initial position of the container
      container.css("left", 0);

      // Add an event listener to the window scroll event
      jQuery(window).on("scroll", function () {
        // Get the current scroll position
        var scrollY = jQuery(window).scrollTop();

        // Calculate the new position of the container based on scroll direction
        var direction = scrollY > 0 ? -1 : 1; // -1 for scrolling down, 1 for scrolling up
        var newLeft = scrollY * 0.5 * direction; // Adjust the factor to control the speed

        // Set the new position of the container
        container.css("left", newLeft);
      });
      // if (jQuery("body .logos-carousel").length) {
      //   const checkpointdata1 = jQuery(".logos-carousel").offset();
      //   var section_width1 =
      //     document.getElementsByClassName("logos-carousel")[0].scrollWidth / 4;
      //   if (jQuery(document).width() < 768)
      //     section_width1 =
      //       document.getElementsByClassName("logos-carousel")[0].scrollWidth /10;
      //   const scroll_ratio1 = section_width1 / jQuery(window).height();
      //   //const scroll_ratio_offset = 200/jQuery(window).height();

      //   if (wt > 1200) {
      //     var total_ratio1 = scroll_ratio1 - 1.3;
      //     var checkpoint1 = checkpointdata1.top - jQuery(window).height() + 150;
      //   } else {
      //     var total_ratio1 = scroll_ratio1 - 0.2;
      //     var checkpoint1 = checkpointdata1.top - jQuery(window).height() + 100;
      //   }

      //   // if (wt > 767 && wt < 1200) {
      //   // 	var total_ratio = scroll_ratio;
      //   // 	var checkpoint = (checkpointdata.top-jQuery(window).height())+250;
      //   // }

      //   window.addEventListener("scroll", () => {
      //     const currentScroll1 = window.pageYOffset;

      //     // console.log(section_width);
      //     // console.log(currentScroll);
      //     // console.log(checkpoint);
      //     // console.log('ratio: '+total_ratio);

      //     if (currentScroll1 >= checkpoint1) {
      //       var left1 = checkpoint1 - currentScroll1;
      //       var left1 = left1 * total_ratio1;

      //       var right1 = currentScroll1 - checkpoint1;
      //       var right1 = right1 * total_ratio1;
      //     } else {
      //       var left1 = -500;
      //       var right1 = 0;
      //     }
      //     jQuery(".logos-carousel").css("left", left1-500);
      //     jQuery(".logos-carousel.scroll-right").css("left", right1);
      //   });
      // }
    }, 1000);
  });

  window.addEventListener("scroll", () => {
    //jQuery('.services-header-section-column .services-main-bottom-headings .uvc-sub-heading').toggleClass('fixedpositionss');
    var currentScrolls = window.pageYOffset;

    // console.log('dhaval');
    // console.log(currentScrolls);
    // console.log(jQuery(window).height());
    if (window.pageYOffset < jQuery(window).height()) {
      jQuery(
        ".service-detail-page.bottom-services-common-section .vc_row .uvc-heading"
      ).toggleClass("fixedpositionss");
    } else {
      jQuery(
        ".service-detail-page.bottom-services-common-section .vc_row .uvc-heading"
      ).removeClass("fixedpositionss");
    }
  });

  // Scroll Image
  if (
    jQuery("body .service-detail-page.bottom-services-common-section").length
  ) {
    if (wt > 767) {
      setTimeout(function () {
        const checkpointdata = jQuery(
          "body .service-detail-page.bottom-services-common-section"
        ).offset();
        const section_width = jQuery(window).width();

        const checkpoint = checkpointdata.top - jQuery(window).height() + 100;

        const scroll_ratio = section_width / jQuery(window).height();
        //const scroll_ratio_offset = 200/jQuery(window).height();

        var total_ratio = scroll_ratio + 0.3;

        var exist_style = jQuery(
          "body .service-detail-page.bottom-services-common-section"
        ).attr("style");

        window.addEventListener("scroll", () => {
          const currentScroll = window.pageYOffset;

          // console.log(section_width);
          // console.log(currentScroll);
          // console.log(checkpoint);
          // console.log(total_ratio);
          // console.log(exist_style);

          if (currentScroll >= checkpoint) {
            var right = currentScroll - checkpoint;
            var right = right * total_ratio;

            //console.log(right);
          } else {
            var right = 0;
          }

          if (section_width >= 315 + right) {
            jQuery(
              "body .service-detail-page.bottom-services-common-section"
            ).attr(
              "style",
              exist_style +
                ";background-position: right " +
                right +
                "px bottom !important"
            );
          }
        });
      }, 1000);
    }
  }

  videoHeader();
  inNumbersPadding();

  jQuery(".n-grid-services-media").each(function () {
    jQuery(this).append(
      '<span class="icomoon-the7-font-the7-arrow-35"></span>'
    );
  });
  jQuery(".e-home .same-logo").append(
    '<img class="white-logo" src="https://www.astudio.ae/wp-content/uploads/2023/01/ASTUDIO-logo-long-white.svg" sizes="234px" alt="ASTUDIO">'
  );

  var total_clicks = Math.floor(
    jQuery(document).height() / jQuery(window).height()
  );
  var click_count = 0;
  jQuery(".pages-arrow").on("click", function () {
    // jQuery(this).removeClass("rotate-up");

    if (total_clicks <= click_count) {
      click_count = 0;
    } else {
      click_count++;
    }

    if (total_clicks - 1 < click_count) {
      jQuery(this).addClass("rotate-up");
    } else {
      jQuery(this).removeClass("rotate-up");
    }

    jQuery("html, body").animate(
      { scrollTop: click_count * jQuery(window).height() },
      "slow"
    );
  });
  if (jQuery(".internal-menu h2.widgettitle").length > 0)
    jQuery(".internal-menu h2.widgettitle").each(function () {
      jQuery(this).append(
        '<span class="vc_icon_element-icon icomoon-the7-font-the7-plus-00"></span>'
      );
    });
  jQuery(".internal-menu h2.widgettitle").on("click", function () {
    jQuery(this).toggleClass("open-internal-menu");
    jQuery(this).parent(".widget_nav_menu").find("ul").slideToggle();
  });

  if (jQuery(".double-menu-expanded .plus-expanded-text h2").length > 0)
    jQuery(".double-menu-expanded .plus-expanded-text h2").each(function () {
      jQuery(this).append(
        '<span class="vc_icon_element-icon icomoon-the7-font-the7-plus-00"></span>'
      );
    });

  jQuery(".double-menu-expanded .plus-expanded-text h2").on(
    "click",
    function () {
      jQuery(this).toggleClass("open-expanded-text");
      jQuery(".double-menu-expanded .plus-expanded-text h2")
        .parents(".double-menu-expanded")
        .find(".expanded-text-new")
        .slideToggle();
    }
  );
});

jQuery(window).resize(function () {
  inNumbersPadding();
  getInTouchPadding();
});

function inNumbersPadding() {
  var padd = (jQuery(window).width() - jQuery(".wf-wrap").width()) / 2;
  jQuery(".in-numbers-padding").css("padding-left", padd);
}

function getInTouchPadding() {
  if (jQuery(document).width() >= 768) {
    if (jQuery(".mobile-branding .same-logo").length > 0) {
      var padd = jQuery(".mobile-branding .same-logo").offset().left;
      jQuery(".e-video-button").css("left", padd);
    }
  }
}

function videoHeader() {
  if (jQuery(".m12-header-video").length > 0) {
    var height = jQuery(window).height();
    var width = jQuery(window).width();
    if (width > 768 && width < 1441) {
      jQuery(".m-12-text").css(
        "padding-left",
        jQuery("html .mobile-header-bar .same-logo").offset().left
      );
    }
    var contentHeight = jQuery(".m-12-text-desktop > div").height();
    var contentContainerHeight = jQuery(".m-12-text-desktop").height();
    if (height < 650) height = 0.562 * width;
    if (contentContainerHeight < contentHeight) height = 0.562 * width;
    var unit = (height / width) * 100;
    var unit2 = (100 / width) * 100;
    if (unit < 68 && width > 1023) {
      jQuery(".m12-header-video").css("height", unit + "vw");
      jQuery(".m-12-bg").css("height", "calc(" + unit + "vw + 1px)");
      jQuery(".m-12-text").css(
        "height",
        "calc(" + unit + "vw - " + unit2 + "vw)"
      );
      jQuery(".m-12-video").css(
        "height",
        "calc(" + unit + "vw - " + unit2 + "vw)"
      );
    }
  }
  if (width > 768)
    jQuery("#content > div:not(.e-home-video-container)")
      .first()
      .css(
        "left",
        -(jQuery(document).width() - jQuery("#content").width()) / 2 + 25
      );
  else
    jQuery("#content > div:not(.e-home-video-container)")
      .first()
      .css("left", 0);
}

function marquee(a, b) {
  if (jQuery("body #scrolletext-container").length) {
    var width = b.width();
    var start_pos = "0";
    var end_pos = -width;

    function scroll() {
      if (b.position().left <= -width) {
        b.css("left", start_pos);
        scroll();
      } else {
        time =
          (parseInt(b.position().left, 10) - end_pos) *
          (500000 / (start_pos - end_pos)); // Increase or decrease speed by changing value 10000
        b.animate(
          {
            left: -width,
          },
          time,
          "linear",
          function () {
            scroll();
          }
        );
      }
    }

    b.css({
      width: width,
      left: start_pos,
    });
    scroll(a, b);

    b.mouseenter(function () {
      // Remove these lines
      b.stop(); //
      b.clearQueue(); // if you don't want
    }); //
    b.mouseleave(function () {
      // marquee to pause
      scroll(a, b); //
    }); // on mouse over
  }
}

jQuery(document).ready(function () {
  var scrltxt = jQuery("#scrolletext-container #scrollertext").text();
  //console.log(scrltxt);

  jQuery("#scrolletext-container #scrollertext").text(
    scrltxt +
      " / " +
      scrltxt +
      " / " +
      scrltxt +
      " / " +
      scrltxt +
      " / " +
      scrltxt +
      " / " +
      scrltxt +
      " / " +
      scrltxt +
      " / " +
      scrltxt +
      " / " +
      scrltxt +
      " / " +
      scrltxt
  );

  marquee(jQuery("#scrolletext-container"), jQuery("#scrollertext")); //Enter name of container element & marquee element

  //Show alternate images on ecommerce page
  jQuery("body.page-id-57826 article").odd().css("display", "none");

  //Show next image on mouseover
  jQuery("body.page-id-57826 article").on("mouseover", function () {
    var temp_srcset = jQuery(this).find("img").attr("src");
    var nextImgSrcset = jQuery(this)
      .closest("div")
      .next("div")
      .find("img")
      .attr("srcset");
    jQuery(this).find("img").attr("srcset", nextImgSrcset);
  });

  //Show previous image on mouseleave
  jQuery("body.page-id-57826 article").on("mouseleave", function () {
    var temp_src = jQuery(this).find("img").attr("src");
    jQuery(this).find("img").attr("srcset", temp_src);
  });

  jQuery(".page-id-57160 .entry-title a").on("click", function (e) {
    jQuery(".page-id-57160 .entry-title a").css("cursor", "default");
    e.preventDefault();
    return false;
  });

  jQuery(
    "body.page-id-57160 .wf-cell article,body.page-id-57339 .wf-cell article,body.page-id-65881 .wf-cell article"
  ).on("mouseenter", function () {
    if (jQuery(this).find(".entry-excerpt p").text() != "Case Study") {
      jQuery(this).css("pointer-events", "none");
      //jQuery(this).removeClass('is-clicked');
    }
  });

  jQuery(
    "body.page-id-57160 .wf-cell article,body.page-id-57339 .wf-cell article,body.page-id-65881 .wf-cell article"
  ).on("touchstart", function (e) {
    if (jQuery(this).find(".entry-excerpt p").text() != "Case Study") {
      jQuery(this).off("touchstart");
      jQuery(this).unbind();
      //jQuery(this).css('touch-action','none');
    } else {
      // console.log("wokring else part1");
      // console.log(jQuery(this).attr("class"));
      jQuery(this).addClass("testpp");
      var current_element = jQuery(this);
      setTimeout(function () {
        current_element.toggleClass("is-clicked");
      }, 2000);
    }
  });

  //document.querySelector("input[type=text][class=fw-text-input]").setAttribute("placeholder", "Type your answer here...");
  jQuery("input.fw-text-input").attr("placeholder", "Type your answer here...");
  //jQuery("input.fw-text-input").append('<span class="icomoon-the7-font-the7-arrow-35"></span>');
  jQuery(
    '<span class="submit-form icomoon-the7-font-the7-arrow-35"></span>'
  ).insertAfter("input.fw-text-input");

  jQuery("span.submit-form").on("click", function () {
    var e = jQuery.Event("keypress", { which: 13 });
    jQuery("input.fw-text-input:visible").trigger(e);
  });

  jQuery(".submitbutton").hide();
  jQuery(".wpcf7-form .portfolio-button").on("click", function () {
    jQuery(".submitbutton input").trigger("click");
  });

  // by wissam 10-08-2022
  jQuery(".x-sign").each(function () {
    var titleWidth = jQuery(this).find(".uvc-main-heading h2").width();
    jQuery(this)
      .find(".services-toggle-icon")
      .css("left", titleWidth + 12);
  });

  jQuery(".scroll-top2").on("click", function (e) {
    jQuery("html, body").animate(
      { scrollTop: jQuery(window).scrollTop() + jQuery(window).height() },
      500
    );
  });

  // by wissam 15-4-2022
  // Services Toggle Icon 2
  jQuery(".services-inner-row-second-2").hide();
  jQuery(document).on("click", ".services-toggle-icon-2", function () {
    jQuery(this).toggleClass("open");
    jQuery(this)
      .parent(".wpb_wrapper")
      .children(".services-inner-row-second-2")
      .slideToggle("500");
  });

  jQuery(document).on(
    "click",
    ".services-strategy-section .services-inner-heading-column .uvc-main-heading",
    function () {
      jQuery(".services-strategy-section .services-toggle-icon-2").toggleClass(
        "open"
      );
      jQuery(
        ".services-strategy-section .services-inner-row-second-2"
      ).slideToggle("500");
    }
  );

  jQuery(document).on(
    "click",
    ".services-creative-section .services-inner-heading-column .uvc-main-heading",
    function () {
      jQuery(".services-creative-section .services-toggle-icon-2").toggleClass(
        "open"
      );
      jQuery(
        ".services-creative-section .services-inner-row-second-2"
      ).slideToggle("500");
    }
  );

  jQuery(document).on(
    "click",
    ".services-production-section .services-inner-heading-column .uvc-main-heading",
    function () {
      jQuery(
        ".services-production-section .services-toggle-icon-2"
      ).toggleClass("open");
      jQuery(
        ".services-production-section .services-inner-row-second-2"
      ).slideToggle("500");
    }
  );

  jQuery(document).on(
    "click",
    ".services-digital-section .services-inner-heading-column .uvc-main-heading",
    function () {
      jQuery(".services-digital-section .services-toggle-icon-2").toggleClass(
        "open"
      );
      jQuery(
        ".services-digital-section .services-inner-row-second-2"
      ).slideToggle("500");
    }
  );

  jQuery(document).on(
    "click",
    ".services-strategy-section .services-toggle-icon-2",
    function () {
      jQuery(
        ".services-strategy-section .services-inner-row-second-2"
      ).slideToggle("500");
    }
  );

  jQuery(document).on(
    "click",
    ".services-creative-section .services-toggle-icon-2",
    function () {
      jQuery(
        ".services-creative-section .services-inner-row-second-2"
      ).slideToggle("500");
    }
  );

  jQuery(document).on(
    "click",
    ".services-production-section .services-toggle-icon-2",
    function () {
      jQuery(
        ".services-production-section .services-inner-row-second-2"
      ).slideToggle("500");
    }
  );

  jQuery(document).on(
    "click",
    ".services-digital-section .services-toggle-icon-2",
    function () {
      jQuery(
        ".services-digital-section .services-inner-row-second-2"
      ).slideToggle("500");
    }
  );
  jQuery("#fancy-header h2.fancy-subtitle").after(
    '<a class="animation-builder brown default-btn-shortcode dt-btn link-hover-off" style="width: 200px; padding: 15px; margin-top: 10px;" title="Front Main" href="/contact-us/">get in touch</a>'
  );
  jQuery(".m-12-btn").text("get in touch");

  const swiper = new Swiper(".ast-slider", {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".ast-button-next",
      prevEl: ".ast-button-prev",
    },
    // If we need pagination
  });

  const swiper2 = new Swiper(".ast-slider-2", {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".ast-button-next",
      prevEl: ".ast-button-prev",
    },
    // If we need pagination
  });
  if (jQuery(".wpcf7").length > 0) {
    var wpcf7Elm = document.querySelector(".wpcf7");

    wpcf7Elm.addEventListener(
      "wpcf7mailsent",
      function (event) {
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
        jQuery(".contact-step-1").slideUp();
        jQuery(".contact-step-2").slideDown();

        window.history.pushState("thank you", "", "/contact-us/thank-you");
      },
      false
    );
  }

  jQuery(document).on(
    "click",
    ".services-headings .uvc-sub-heading p strong",
    function () {
      jQuery(this)
        .parents(".services-headings")
        .find(".vc_icon_element-icon")
        .click();
    }
  );
});

window.onload = () => {
  getInTouchPadding();
  videoHeader();
};
