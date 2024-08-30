let socials = [
    {
        platform: 'Twitch',
        link: "https://www.twitch.tv/v0idzzy",
        img: ""
    },
    {
        platform: 'Twitter',
        link: "https://twitter.com/v0idzzy",
        img: ""
    },
    {
        platform: 'Youtube',
        link: "https://www.youtube.com/@v0idzzy",
        img: ""
    },
    {
        platform: 'TikTok',
        link: "https://www.tiktok.com/@v0idzzy",
        img: ""
    },
    {
        platform: 'Discord',
        link: "https://discord.gg/YwSyRsEtwy",
        img: ""
    },
    {
        platform: 'Throne',
        link: "https://throne.com/v0idzzy",
        img: ""
    },
    {
        platform: 'Donation',
        link: "https://streamelements.com/v0idzzy/tip",
        img: ""
    }
];
let socialLinks = document.querySelector(".socials");
socials.forEach((social) => {
    let linkBox = document.createElement('div');
    linkBox.setAttribute('class', 'socialBox')
    linkBox.innerHTML = `
        <a href = '${social.link}'>${social.link.includes('www.') ? social.link.slice(12) : social.link.slice(8)}</a>
    `;
    socialLinks.appendChild(linkBox);
});