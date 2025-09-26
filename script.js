// Default menu data (fallback)
const menuItems = [
  // {
  //   id: 1,
  //   name: "관자 에비 아게모노",
  //   nameEn: "Gwancha ebi agemono",
  //   description: "신선한 관자와 새우를 바삭하게 튀긴 요리",
  //   price: "20,000원",
  //   image: "public/images/menus/관자 에비 아게모노.jpg",
  // },
  // {
  //   id: 2,
  //   name: "난반 가라아게",
  //   nameEn: "Nampan garage",
  //   description: "바삭하게 튀긴 닭고기와 절임고추 소스에 버무린 튀김요리",
  //   price: "18,000원",
  //   image: "public/images/menus/난반 가라아게.jpg",
  // },
  // {
  //   id: 3,
  //   name: "대창 덮밥(점심)",
  //   nameEn: "Daechon deopbap(Lunch)",
  //   description: "대창 덮밥(점심)",
  //   price: "12,000원",
  //   image: "public/images/menus/대창 덮밥( 점심).jpg",
  // },
  // {
  //   id: 4,
  //   name: "메로 유한야끼",
  //   nameEn: "Mero yunakki",
  //   description: "메로를 간장양념에 재워 숯불로 구워낸 부드러운 요리",
  //   price: "26,000원",
  //   image: "public/images/menus/메로 유한야끼.jpg",
  // },
  // {
  //   id: 5,
  //   name: "모듬 사시미",
  //   nameEn: "Mushroom yunakki",
  //   description: "다양한 종류의 제철 생선을 숙성해 감칠맛을 더한 사시미",
  //   price: "38,000원",
  //   image: "public/images/menus/모듬 사시미.jpg",
  // },
  // {
  //   id: 6,
  //   name: "모모니꾸",
  //   nameEn: "Momoni gu",
  //   description: "모모니꾸",
  //   price: "20,000원",
  //   image: "public/images/menus/모모니꾸.jpg",
  // },
  // {
  //   id: 7,
  //   name: "모츠 나베",
  //   nameEn: "Motsu naebi",
  //   description: "고소한 대창과 채소를 깊고 진한 국물에 끓인 일본식 나베요리",
  //   price: "26,000원",
  //   image: "public/images/menus/모츠 나베.jpg",
  // },
  // {
  //   id: 8,
  //   name: "붓가케 우동",
  //   nameEn: "Bubukake udon",
  //   description: "붓가케 우동",
  //   price: "20,000원",
  //   image: "public/images/menus/붓가케 우동.jpg",
  // },
  // {
  //   id: 9,
  //   name: "사바 보우 스시",
  //   nameEn: "Sabaw boo sushi",
  //   description: "깊은 풍미의 숙성 초절임 고등어로 만든 초밥",
  //   price: "22,000원",
  //   image: "public/images/menus/사바 보우 스시.jpg",
  // },
  // {
  //   id: 10,
  //   name: "세세리 야끼",
  //   nameEn: "Seseri yaki",
  //   description: "쫄깃한 닭목살을 매콤하게 구운 숯불요리",
  //   price: "18,000원",
  //   image: "public/images/menus/세세리 야끼.jpg",
  // },
  // {
  //   id: 11,
  //   name: "치즈 고로케",
  //   nameEn: "Cheese gorekake",
  //   description: "세 가지 치즈를 넣어 매장에서 직접 만든 바삭, 고소한 수제 고로케(1pc)",
  //   price: "5,000원",
  //   image: "public/images/menus/수제 고로케.jpg",
  // },
  // {
  //   id: 12,
  //   name: "시메 사바",
  //   nameEn: "Sime saba",
  //   description: "신선한 고등어를 초절임하여 깔끔하게 즐기는 일본식 사시미",
  //   price: "18,000원",
  //   image: "public/images/menus/시메 사바.jpg",
  // },
  // {
  //   id: 13,
  //   name: "연어 덮밥",
  //   nameEn: "Ebi deopbap",
  //   description: "연어 덮밥",
  //   price: "20,000원",
  //   image: "public/images/menus/연어 덮밥.jpg",
  // },
  // {
  //   id: 14,
  //   name: "연어 시오야끼",
  //   nameEn: "Ebi shioyaki",
  //   description: "연어 시오야끼",
  //   price: "20,000원",
  //   image: "public/images/menus/연어 시오야끼.jpg",
  // },
  // {
  //   id: 15,
  //   name: "우니 삼합",
  //   nameEn: "Unni samhwa",
  //   description: "달콤한 단새우, 부드러운 관자, 바다향 가득한 우니의 조화",
  //   price: "30,000원",
  //   image: "public/images/menus/우니 삼합.jpg",
  // },
  // {
  //   id: 16,
  //   name: "카이센동",
  //   nameEn: "Kaiseondo",
  //   description: "신선한 해산물과 밥의 조화를 이루는 덮밥",
  //   price: "20,000원",
  //   image: "public/images/menus/카이센동.jpg",
  // },
  // {
  //   id: 17,
  //   name: "테바사끼 교자",
  //   nameEn: "Tebasaki kjowa",
  //   description: "닭날개 속에 다짐육을 채워 구운 숯불요리",
  //   price: "18,000원",
  //   image: "public/images/menus/테바사끼 교자.jpg",
  // },
  // {
  //   id: 18,
  //   name: "호소 마키",
  //   nameEn: "Hoso maki",
  //   description: "재료 하나의 맛을 살린 심플한 한입 롤",
  //   price: "18,000원",
  //   image: "public/images/menus/호소 마끼.jpg",
  // },
  // {
  //   id: 19,
  //   name: "후토마키",
  //   nameEn: "Hoto maki",
  //   description: "여러가지 재료를 듬뿍 넣어 두툼하게 말아낸 롤(5pcs)",
  //   price: "14,000원",
  //   image: "public/images/menus/후토마끼.jpg",
  // },
  // {
  //   id: 20,
  //   name: "둥치 상차림",
  //   nameEn: "Doongchi sangchari",
  //   description: "정성을 다하겠습니다",
  //   price: "",
  //   image: "public/images/menus/전체샷6.jpg",
  // },
  // {
  //   id: 21,
  //   name: "둥치",
  //   nameEn: "Doongchi",
  //   description: "어서오세요",
  //   price: "",
  //   image: "public/images/logo.jpg",
  // },
]

// Load menu from CSV (public/menu.csv)
async function loadMenuItemsFromCSV(primaryPath) {
  const candidatePaths = [primaryPath, "./" + primaryPath, "/" + primaryPath]
  for (const p of candidatePaths) {
    try {
      const res = await fetch(p, { cache: "no-store" })
      if (!res.ok) throw new Error("HTTP " + res.status)
      const text = await res.text()
      const items = parseCSVToMenuItems(text)
      if (items.length) {
        return items
      }
    } catch (err) {
      console.warn("CSV load failed for", p, err)
    }
  }
  return []
}

function parseCSVToMenuItems(csvText) {
  // Remove BOM if present
  const clean = csvText.replace(/^\uFEFF/, "")
  const lines = clean.trim().split(/\r?\n/)
  if (lines.length < 2) return []
  const headers = lines[0].split(",").map((h) => h.trim())
  const items = []
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]
    if (!line.trim()) continue
    const cols = line.split(",")
    const row = {}
    headers.forEach((h, idx) => {
      row[h] = (cols[idx] || "").trim()
    })
    items.push({
      id: Number(row.id) || i,
      name: row.name || "",
      nameEn: row.nameEn || "",
      description: row.description || "",
      price: row.price || "",
      image: row.image || "",
    })
  }
  return items
}

$(document).ready(() => {
  // Initialize audio
  const audio = $("#backgroundMusic")[0]
  let isPlaying = false
  let isMuted = false

  // Faster-start easing for scroll
  $.easing.easeOutCubic = function (p) {
    return 1 - Math.pow(1 - p, 3)
  }

  // Set initial volume
  audio.volume = 0.3

  // Play/Pause functionality
  $("#playPauseBtn").click(() => {
    if (isPlaying) {
      audio.pause()
      $("#playIcon").show()
      $("#pauseIcon").hide()
    } else {
      audio.play()
      $("#playIcon").hide()
      $("#pauseIcon").show()
    }
    isPlaying = !isPlaying
  })

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
  })

  // Audio event listeners
  audio.addEventListener("play", () => {
    isPlaying = true
    $("#playIcon").hide()
    $("#pauseIcon").show()
  })

  audio.addEventListener("pause", () => {
    isPlaying = false
    $("#playIcon").show()
    $("#pauseIcon").hide()
  })

  // Generate menu items
  function generateMenuItems(list) {
    const menuGrid = $("#menuGrid")
    menuGrid.empty()

    list.forEach((item) => {
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
  })

  // Hero button scroll to menu
  $(".hero-gradient button").click(() => {
    $("html, body").animate(
      {
        scrollTop: $("#menu").offset().top - 80,
      },
      200,
      "easeOutCubic",
    )
  })

  // Initialize menu: try CSV, fallback to built-in data
  loadMenuItemsFromCSV("public/menu.csv").then((csvItems) => {
    const data = csvItems && csvItems.length ? csvItems : menuItems
    generateMenuItems(data)
  })
})
