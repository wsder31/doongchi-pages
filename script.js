$(document).ready(() => {
  // Initialize audio
  const audio = $("#backgroundMusic")[0];
  const playlist = [
    "public/bgm/둥치2. 둥치 둥치 머무는 자리 2025.mp3",
    "public/bgm/둥치1. 다시 만날 수 있는 곳 2025.mp3",
  ];
  let currentTrackIndex = 0;
  let isPlaying = false;
  let isMuted = false;

  function loadTrack(index) {
    if (playlist.length === 0) return
    if (index < 0) index = playlist.length - 1
    if (index >= playlist.length) index = 0
    currentTrackIndex = index
    audio.src = playlist[currentTrackIndex]
  }

  function playCurrent() {
    audio.play()
    $("#playIcon").hide()
    $("#pauseIcon").show()
    isPlaying = true
  }

  function pauseCurrent() {
    audio.pause()
    $("#playIcon").show()
    $("#pauseIcon").hide()
    isPlaying = false
  }

  // Faster-start easing for scroll
  $.easing.easeOutCubic = function (p) {
    return 1 - Math.pow(1 - p, 3);
  };

  // Set initial volume and load first track
  audio.volume = 0.3;
  loadTrack(currentTrackIndex);

  // Play/Pause functionality
  $("#playPauseBtn").click(() => {
    if (isPlaying) {
      pauseCurrent()
    } else {
      if (!audio.src) loadTrack(currentTrackIndex)
      playCurrent()
    }
  });

  // Mute/Unmute functionality
  $("#muteBtn").click(() => {
    audio.muted = !isMuted
    if (isMuted) {
      $("#volumeIcon").show()
      $("#muteIcon").hide()
    } else {
      $("#volumeIcon").hide()
      $("#muteIcon").show()
    }
    isMuted = !isMuted
  });

  // Audio event listeners
  audio.addEventListener("play", () => {
    isPlaying = true
    $("#playIcon").hide()
    $("#pauseIcon").show()
  });

  audio.addEventListener("pause", () => {
    isPlaying = false
    $("#playIcon").show()
    $("#pauseIcon").hide()
  });

  // Auto next when track ends
  audio.addEventListener("ended", () => {
    loadTrack(currentTrackIndex + 1)
    playCurrent()
  });

  // Next / Previous buttons
  $("#nextBtn").click(() => {
    loadTrack(currentTrackIndex + 1)
    if (isPlaying) playCurrent()
  });
  $("#prevBtn").click(() => {
    loadTrack(currentTrackIndex - 1)
    if (isPlaying) playCurrent()
  });

  // Generate menu items
  function generateMenuItems() {
    const menuGrid = $("#menuGrid")
    menuGrid.empty()

    menuItems.forEach((item) => {
      const menuCard = `
                <div class="menu-card-hover bg-card border border-border overflow-hidden rounded-lg">
                    <div class="aspect-[4/3] overflow-hidden">
                        <img src="${item.image || "/japanese-food.jpg"}" 
                             alt="${item.name}" 
                             class="w-full h-full object-cover transition-transform duration-300 hover:scale-105">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-xl font-bold text-card-foreground">${item.name}</h3>
                            <span class="text-lg font-semibold text-primary">${item.price}</span>
                        </div>
                        ${item.nameEn ? `<p class="text-sm text-muted-foreground mb-3">${item.nameEn}</p>` : ""}
                        <p class="text-muted-foreground">${item.description}</p>
                    </div>
                </div>
            `
      menuGrid.append(menuCard)
    })
  }

  // Smooth scrolling for navigation links
  $('a[href^="#"]').click(function (e) {
    e.preventDefault()
    const target = $($(this).attr("href"))
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 80,
        },
        200,
        "easeOutCubic",
      )
    }
  });

  // Hero button scroll to menu
  $(".hero-gradient button").click(() => {
    $("html, body").animate(
      {
        scrollTop: $("#menu").offset().top - 80,
      },
      200,
      "easeOutCubic",
    )
  });

  // Initialize menu
  generateMenuItems();
})
