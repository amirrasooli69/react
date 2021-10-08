const router = require("express").Router();
const _ = require("lodash");

const data = {
  products: [
    {
      id: '1',
      title: "Acer Predator Helios 300 Gaming Laptop",
      price: "$1,349.98",
      pic:
        "https://images-na.ssl-images-amazon.com/images/I/71bRl4ymGDL._AC_SX425_.jpg",
      desc: `9th Generation Intel Core i7-9750H 6-Core Processor (Upto 4. 5 gramHz) with Windows 10 Home 64 Bit
          NVIDIA GeForce GTX 1660 Ti Graphics with 6 GB of dedicated GDDR6 VRAM
          15. 6" Full HD (1920 x 1080) Widescreen LED-backlit IPS display (144Hz Refresh Rate, 3ms Overdrive Response Time, 300nit Brightness & 72% NTSC)
          16 GB DDR4 2666MHz Memory, 512GB PCIe NVMe SSD (2 x PCIe M. 2 Slots | 1 Slot Open for Easy Upgrades) & 1 - Available Hard Drive Bay
          Backlit Keyboard | LAN: Killer Gaming Network E2500 | Wireless: Killer DoubleShot Pro Wireless-AX 1650 WiFi 6 802. 11ac | 4th Gen All-Metal AeroBlade 3D Fan`,
    },
    {
      id: '2',
      title: "ROG Zephyrus G15 (2020)",
      price: "$1,299.99",
      pic:
        "https://images-na.ssl-images-amazon.com/images/I/71EarUTA6eL._AC_SX679_.jpg",
      desc: `NVIDIA GeForce GTX 1660 Ti 6GB GDDR6 with ROG Boost (Base 1140MHz Boost 1335MHz TDP 60W)
          AMD Ryzen 7 4800HS processor (up to 4.2GHz)
          15.6” 144Hz IPS-Type Full HD (1920x1080) display
          16GB 3200MHz DDR4 RAM | 1TB PCIe NVMe M 2 SSD | Backlit Precision Gaming Keyboard | Windows 10 Home
          0.8” thin, 4.85 lbs ultra-portable form-factor
          Gig+ Wi-Fi 6 (802.11ax) | USB Type-C Charging Capable
          ROG Intelligent Cooling system with self-cleaning anti-dust tunnels preserves cooling performance and system stability`,
    },
    {
      id: '3',
      title: "Lenovo Ideapad L340 Gaming Laptop",
      price: "$859.00",
      pic:
        "https://images-na.ssl-images-amazon.com/images/I/81XvT%2BahkoL._AC_SX679_.jpg",
      desc: `A new dimension of gaming performance awaits - with 9th-generation Intel Core i5 processors, the IdeaPad L340 gaming has the power you need to outshoot, outrun, and outsmart anyone. Includes 8GB DDR4 RAM and 512GB NVMe SSD
          Take it to the next level - with the latest NVIDIA GeForce Graphics behind you, you can tame the hottest titles with faster, smoother, and more power-efficient gameplay. Plus, the 15.6-Inch Screen delivers a stunning full HD IPS Display with 1920 x 1080 resolution
          A portal to a new sound Dimension - hardwired into every IdeaPad L340 gaming is advanced Dolby Audio technology. Take your mobile gaming experience to another dimension and have a real blast along the way
          Control your own Fate - GAME in 'quick' Mode or work in 'quiet' Mode. It's your call with a simple function setting that lets you shift gears between modes, instantly.
          Final product may vary slightly from image`,
    },
    {
      id: '4',
      title: "ASUS TUF Gaming Laptop, 17.3”",
      price: "$814.99",
      pic:
        "https://images-na.ssl-images-amazon.com/images/I/811khTQc-qL._AC_SX569_.jpg",
      desc: `Quad-core AMD Ryzen 5 3550H (2M Cache, up to 3.7GHz)
          AMD Radeon RX560X graphics
          17. 3” FHD (1920x1080) IPS type display
          512GB PCIe NVMe M. 2 SSD | 8GB DDR4 RAM | Windows 10 Home
          Portable design with 1.02” thin profile gaming laptop
          Dual fans with anti-dust technology
          Red-backlit keyboard rated for 20-million keystroke durability`,
    },
    {
      id: '5',
      title: '2019 ASUS TUF 17.3"',
      price: "$969.00",
      pic:
        "https://images-na.ssl-images-amazon.com/images/I/61UUq%2BRQTXL._AC_SX466_.jpg",
      desc: `The powerful AMD Ryzen 7 3750H Quad-Core (2. 3GHz base frequency, up to 4. 0GHz burst frequency) APU is quick and versatile, with quad cores and eight threads capable of cutting through day-to-day work.
          17. 3" IPS-Level Full HD Widescreen LED Display (1920 x 1080) Display boasts impressive color and clarity. NVIDIA GeForce GTX 1650 Graphics backed by 4GB GDDR5 dedicated video memory for an ultrafast, advanced GPU to fuel your games.
          8GB DDR4 2400MHz Memory for full-power multitasking; 512GB M. 2 NVMe PCIe SSD for faster performance and better reliability; Pci-e SSDs are great for major gaming applications, multiple servers, daily backups, and more.
          802. 11 Wireless-AC + Bluetooth 4. 2, 1 x USB 3. 1, 1 x USB 2. 0, 1 x HDMI 2. 0
          Windows 10 Home 64-bit; RGB backlit keyboard allows you to enjoy comfortable and accurate typing, even in dim lighting.`,
    },
    {
      id: '6',
      title: "Acer Predator Helios 300",
      price: "$1,199.77",
      pic:
        "https://images-na.ssl-images-amazon.com/images/I/61rjV21bzfL._AC_SX355_.jpg",
      desc: `8th Generation Intel Core i7-8750H 6-Core Processor (Up to 4.1GHz) with Windows 10 Home 64 Bit
          NVIDIA GeForce GTX 1060 Overclockable Graphics with 6 GB of dedicated GDDR5 VRAM
          15.6" Full HD (1920 x 1080) widescreen LED-backlit IPS display (144Hz Refresh Rate, 300nit Brightness & 72% NTSC )
          16GB DDR4 2666MHz DRAM Memory & 256GB PCIe NVMe SSD | Extra empty accessible slot for 2.5 inch hard drive or SSD.Maximum Power Supply Wattage:180 W
          Gigabit Wi-Fi |Backlit Keyboard | USB 3.1 (Type C) | Dual All-Metal AeroBlade 3D Fan Cooling | Metal Chassis.Battery Capacity:3320 mAh
          Up to 7-hours of battery life`,
    },
  ],
};
// const data = {
//   products : [
//       {
//           id: 1,
//           title: 'Mytrix Nitro 5 by_Acer Gaming Laptop',
//           price: '$974.99',
//           pic: 'https://m.media-amazon.com/images/I/81UXbo16aeS._AC_SL1500_.jpg',
//           desc: `【Dominate the Battle with Power】With the 10th Gen Intel Core i5-10300H processor and the latest GeForce RTX 3050 (4GB dedicated GDDR6 VRAM), powered by award-winning architecture with new Ray Tracing Cores, Tensor Cores, and streaming multiprocessors support DirectX 12 Ultimate for the ultimate gaming performance, your Nitro 5 is packed with incredible power for all your games
//           【Visual Intensity】Never miss a chance and clutch the game on the 15.6" widescreen Full HD LED-backlit IPS display with 1920 x 1080 resolution, 144Hz refresh rate and 80% screen-to-body rate
//           【Prioritize Your Gameplay】Say Good-Bye to Internet lag & loss, Killer Ethernet E2600 and Intel Wi-Fi 6 AX201 gives you an edge online by taking control of your network and prioritizing your gameplay
//           【Stay Cool Under Pressure】When heavy use requires an added boost, CoolBoost technology increases fan speed by 10% and CPU/GPU cooling by 9% compared to auto mode, overall increasing thermal performance by 25% for better gaming comfort
//           【Take Control of Your Gaming Laptop】The NitroSense UI can be called up with the dedicated keyboard button so you can instantly visualize your PC's component temperature, fan speed, loading performance, power plan, and more. Come with 12 months warranty`
//       },
//       {
//           id: 2,
//           title: 'Dell Flagship G3 15 3500 Gaming Laptop',
//           price: '$899.00',
//           pic: 'https://m.media-amazon.com/images/I/81EJP1frVBL._AC_SX466_.jpg',
//           desc: `8GB RAM | 256GB SSD
//           Equipped With The Powerful and Fast 10th Gen Intel Quad-Core i5-10300H (Base Clock 2.5GHz, Max Boost Clock Up to 4.5GHz, 8MB Intel Smart Cache, 8 Threads)
//           15.6" FHD (1920 x 1080) 120Hz Anti- Glare WVA Display; Dedicated NVIDIA GeForce GTX 1650 Ti 4GB GDDR6, Integrated Intel UHD Graphics
//           1x HDMI 2.0, 1x USB-C (DisplayPort), 1x SuperSpeed USB-A 3.2, 2x SuperSpeed USB-A 2.0, 1x Headset Jack, 1x RJ-45 Ethernet, 1x Standard SD Card slot
//           Microsoft Windows 10 Home (64-bit), Backlit Keyboard, Intel Wi-Fi 6 AX201 (2x2) Wi-Fi and Bluetooth, 2 tuned speakers with Nahimic 3D Audio, Integrated widescreen HD (720p) Webcam with Dual Array Digital Microphone`
//       },
//       {
//           id: 3,
//           title: 'MSI GL65 Leopard 10SFK-062',
//           price: '$1,431.87',
//           pic: 'https://m.media-amazon.com/images/I/81ftUqDdYFL._AC_SX466_.jpg',
//           desc: `15.6" FHD IPS-Level 144Hz 72%NTSC Thin Bezel close to 100%Srgb NVIDIA GeForce RTX 2070 8G GDDR6
//           Intel Core i7-10750H 2.6-5.0GHz Intel Wi-Fi 6 AX201(2 x 2 ax)
//           512GB NVMe SSD 16GB (8G*2) DDR4 2666MHz 2 Sockets Max Memory 64GB
//           USB 3.1 Gen2 Type C 1 USB 3.2 Gen1 3 Steel Series per-Key RGB with Anti-Ghost key+ silver lining 720p HD Webcam
//           Win10 Multi-language Giant Speakers 3W x 2 6 cell (51Wh) Li-Ion 230W`
//       },
//       {
//           id: 4,
//           title: '2021 Asus ROG Strix G17 Gaming Laptop',
//           price: '$2,599.99',
//           pic: 'https://m.media-amazon.com/images/I/61d6MqcNsfL._AC_SX466_.jpg',
//           desc: `【Display】300Hz 3ms 17.3” Full HD 1920x1080 IPS-Type Display;NVIDIA GeForce RTX 3070 8GB GDDR6 with ROG Boost
//           【Processor】Latest AMD Ryzen R9-5900HX Processor (16M Cache, up to 4.6 GHz)
//           【Memory & Storage】 This laptop has been upgraded to 32GB DDR4 3200 megahertz System Memory, 1TB solid-state drive (PCIe), Bundled with Tiktob cloth
//           【Features】ROG Intelligent Cooling thermal system -Thermal Grizzly Liquid Metal Thermal Compound.ROG Aura Sync System with Per-Key RGB Keyboard, White backlit Logo, and RGB Light Bar.Wi-Fi 6 & Bluetooth 5.1 | ROG Easy Upgrade System
//           【Ports】1 x USB 3.2 Gen 2 Type-C with Power Delivery, Display Port and G-Sync 3 x USB 3.2 Gen 1 Type-A, 1 x HDMI 2.0b, 1 x RJ45 LAN port, 1 x 3.5mm Combo Audio Jack. 240W AC Adapter`
//       },
//       {
//           id: 5,
//           title: 'ASUS TUF Gaming F17 Gaming Laptop',
//           price: '$1,349.00',
//           pic: 'https://m.media-amazon.com/images/I/71P8c4cuCDS._AC_SX679_.jpg',
//           desc: `NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 Graphics up to 1585MHz at 60W (75W with Dynamic Boost 2.0)
//           11th Gen Intel Core i7-11800H Processor (24M Cache, up to 4.6 GHz, 8 Cores)
//           15.6” 144Hz FHD (1920x1080) IPS-Type display
//           512GB PCIe NVMe M.2 SSD | 16GB DDR4 3200MHz RAM | Windows 10 Home
//           Durable MIL-STD-810H military standard construction`
//       },
//       {
//           id: 6,
//           title: '2020 Apple MacBook Air Laptop',
//           price: '$949.99',
//           pic: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX522_.jpg',
//           desc: `All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.
//           Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.
//           Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.
//           Stunning Display – With a 13.3” Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.
//           Why Mac – Easy to learn. Easy to set up. Astoundingly powerful. Intuitive. Packed with apps to use right out of the box. Mac is designed to let you work, play, and create like never before.
//           Simply Compatible – All your existing apps work, including Adobe Creative Cloud, Microsoft 365, and Google Drive. Plus you can use your favorite iPhone and iPad apps directly on macOS. Altogether you’ll have access to the biggest collection of apps ever for Mac. All available on the App Store.
//           Easy to Learn – If you already have an iPhone, MacBook Air feels familiar from the moment you turn it on. And it works perfectly with all your Apple devices. Use your iPad to extend the workspace of your Mac, answer texts and phone calls directly on your Mac, and more.`
//       },
//       {
//           id: 7,
//           title: 'Asus 2021 Flagship TUF FX505GT 15 Gaming Laptop',
//           price: '$1,149.00',
//           pic: 'https://m.media-amazon.com/images/I/81F+eN95lhS._AC_SX466_.jpg',
//           desc: `【CUSTOMlZED, Professional Upgraded to】: 8GB RAM I 512GB SSD
//           Equipped With The Powerful and Fast 9th Generation Intel Core i7 Processors, Intel Hexa-Core i7-9750H (Base 2.60 GHz, Up to 4.50 GHz with Intel Turbo Boost Technology, 12 MB Intel Smart Cache, 12 Threads)
//           15.6-inch Full HD (1920 x 1080) LED IPS 144 Hz, 5ms response time Display I NVIDIA GeForce GTX 1650 with 4GB GDDR4 Dedicated graphics memory
//           2 USB 3.2 Gen1 1 USB 2.0 1 HDMI 1 RJ-45 LAN (10/100/1000) 1 Headphone/microphone combo jack
//           Microsoft Windows 10 Home (64-bit), 720p HD webcam, Gigabit Wave 2 Wi-Fi 5 (802.11ac) with Bluetooth 5.0, RGB backlit keyboard rated for 20-million keystroke durability, DTS Headphone: X technology delivers high-fidelity 7.1-channel virtual surround-sound audio, up to 8 hours battery life : 【iCarp HDMI Cable Included】`
//       },
//       {
//           id: 8,
//           title: '2020 Apple MacBook Pro with Apple',
//           price: '$1,199.00',
//           pic: 'https://m.media-amazon.com/images/I/81zKcC5wJ6L._AC_SX522_.jpg',
//           desc: `Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance
//           Get more done with up to 20 hours of battery life, the longest ever in a Mac
//           8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever
//           8-core GPU with up to 5x faster graphics for graphics-intensive apps and games
//           16-core Neural Engine for advanced machine learning
//           8GB of unified memory so everything you do is fast and fluid
//           Superfast SSD storage launches apps and opens files in an instant`
//       }
//   ]
// };
router.get("/", (req, res) => {
  res.json(data.products);
});

router.get("/:id", (req, res) => {
  res.json(_.find(data.products, {id: req.params.id}));
});

module.exports = router;
