import React from "react";

export function Detail() {
    const data = {
        id: 1,
        title: 'Mytrix Nitro 5 by_Acer Gaming Laptop',
        price: '$974.99',
        pic: 'https://m.media-amazon.com/images/I/81UXbo16aeS._AC_SL1500_.jpg',
        desc: `【Dominate the Battle with Power】With the 10th Gen Intel Core i5-10300H processor and the latest GeForce RTX 3050 (4GB dedicated GDDR6 VRAM), powered by award-winning architecture with new Ray Tracing Cores, Tensor Cores, and streaming multiprocessors support DirectX 12 Ultimate for the ultimate gaming performance, your Nitro 5 is packed with incredible power for all your games
        【Visual Intensity】Never miss a chance and clutch the game on the 15.6" widescreen Full HD LED-backlit IPS display with 1920 x 1080 resolution, 144Hz refresh rate and 80% screen-to-body rate
        【Prioritize Your Gameplay】Say Good-Bye to Internet lag & loss, Killer Ethernet E2600 and Intel Wi-Fi 6 AX201 gives you an edge online by taking control of your network and prioritizing your gameplay
        【Stay Cool Under Pressure】When heavy use requires an added boost, CoolBoost technology increases fan speed by 10% and CPU/GPU cooling by 9% compared to auto mode, overall increasing thermal performance by 25% for better gaming comfort
        【Take Control of Your Gaming Laptop】The NitroSense UI can be called up with the dedicated keyboard button so you can instantly visualize your PC's component temperature, fan speed, loading performance, power plan, and more. Come with 12 months warranty`
    };

    return <div className="row">
        <div className="col-5">
            <img src={data.pic} width="100%"/>
        </div>
        <div className="col-7">
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
            <strong style={styles.price}>{data.price}</strong>
        </div>
    </div>
}

const styles = {
    price: {
        color: "green",
        fontSize: 25
    }
};