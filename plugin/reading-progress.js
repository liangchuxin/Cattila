$(document).ready(function () {
    var viewport = $(window);
    var post = $('.post-content');
    // Responsive videos with fitVids
post.fitVids();
    // Format code blocks and add line numbers
    function codestyling() {
    $('pre code').each(function(i, e) {
            // Code highlight
      hljs.highlightBlock(e);
      // No lines for plain text blocks
      if (!$(this).hasClass('language-text')) {
        var code = $(this);
                // Calculate amount of lines
        var lines = code.html().split(/\n(?!$)/g).length;
        var numbers = [];
        if (lines > 1) {
          lines++;
        }
        for (i = 1; i < lines; i++) {
          numbers += '<span class="line" aria-hidden="true">' + i + '</span>';
        }
        code.parent().append('<div class="lines">' + numbers + '</div>');
      }
    });
  }
  codestyling();
    // Reading progress bar on window top
  function readingProgress() {
        var postBottom = post.offset().top + post.height();
        var viewportHeight = viewport.height();
  var progress = 100 - (((postBottom - (viewport.scrollTop() + viewportHeight) + viewportHeight / 3) / (postBottom - viewportHeight + viewportHeight / 3)) * 100);
  $('.progress-bar').css('width', progress + '%');
  (progress > 100) ? $('.progress-container').addClass('complete'): $('.progress-container').removeClass('complete');
  }
  readingProgress();
    // Trigger reading progress
  viewport.on({
    'scroll': function() {
      readingProgress();
    },
    'resize': function() {
      readingProgress();
    },
    'orientationchange': function() {
      readingProgress();
    }
  });
    // Check if disqus is defined by code injection
    if (typeof disqus === 'undefined') {
        // hide comment section
    $('.post-comments').css({
      'display': 'none'
    });
  } else {
    $('#show-disqus').on('click', function() {
      $.ajax({
        type: "GET",
        url: "//" + disqus + ".disqus.com/embed.js",
        dataType: "script",
        cache: true
      });
      $(this).parent().addClass('activated');
    });
  }
});