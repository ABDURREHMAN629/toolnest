module.exports = {
  title: 'How to See Who Unfollowed You on Instagram (Free, No App)',
  desc: "See who doesn't follow you back on Instagram using Instagram's own data download — no password and no risky follower apps. Step-by-step for iPhone, Android and computer.",
  date: '2026-10-26',
  tools: ['instagram-unfollowers-tracker', 'text-compare'],
  faq: [
    ['Does Instagram notify someone when I check if they unfollowed me?', "No. Downloading your own Instagram data and comparing the lists happens on your side only. Nobody is notified."],
    ['Is it safe to use an Instagram unfollower checker?', "It depends on how it works. Tools that ask for your Instagram password can get your account locked or stolen. The method in this guide never asks for your login: you download your data from Instagram yourself and the file is read in your browser."],
    ['Why does the list include people who never followed me?', "The 'not following you back' list shows everyone you follow who doesn't follow you right now. That includes people who unfollowed you and people — like celebrities and brands — who never followed you in the first place."],
    ['How long does Instagram take to prepare my data?', 'Usually a few minutes for just your followers and following lists, but it can take longer when Instagram is busy. Instagram sends a notification and an email when the file is ready to download.'],
    ['Can I see who unfollowed me without downloading my data?', "Only one person at a time: open your Followers list and search for their username. If they don't appear, they don't follow you. To check everyone at once, you need your data download."],
  ],
  html: `
<blockquote><p><strong>Quick answer:</strong> download your <em>Followers and following</em> data from Instagram (Settings → Accounts Center → Your information and permissions → Download your information), then open the ZIP file in a free <a href="/instagram-unfollowers-tracker">Instagram unfollowers tracker</a>. It lists everyone you follow who doesn't follow you back — without your password.</p></blockquote>

<p>Instagram doesn't tell you when someone unfollows you, and it doesn't have a "who unfollowed me" button. That's why so many "unfollower" apps exist. The problem is that most of them ask you to log in with your Instagram password, which is risky. There is a safer way that uses only Instagram's own features.</p>

<h2>Why you should avoid apps that ask for your password</h2>
<ul>
<li><strong>Your account can be locked.</strong> Logins from unknown apps and servers often trigger Instagram's security checks, "suspicious login" warnings or temporary restrictions.</li>
<li><strong>It breaks Instagram's rules.</strong> Instagram's terms don't allow you to give your login to others or let third parties collect data automatically.</li>
<li><strong>Some apps steal accounts.</strong> Handing your password to an unknown developer is exactly how many accounts get hijacked.</li>
</ul>
<p>The method below never asks for your login. You download your own data from Instagram, and the file is read inside your web browser.</p>

<h2>Step 1: Download your followers and following from Instagram</h2>
<h3>On the Instagram app (iPhone or Android)</h3>
<ol class="steps">
<li>Go to your profile, tap the menu (☰) and open <strong>Accounts Center</strong>.</li>
<li>Tap <strong>Your information and permissions → Download your information</strong>.</li>
<li>Choose <strong>Download or transfer information</strong>, select your Instagram account, then <strong>Some of your information</strong>.</li>
<li>Tick only <strong>Followers and following</strong> and choose <strong>Download to device</strong>.</li>
<li>Set the <strong>Date range to "All time"</strong> and the <strong>Format to "JSON"</strong>, then tap <strong>Create files</strong>.</li>
</ol>
<h3>On a computer</h3>
<p>Open instagram.com, click <strong>More → Settings → Accounts Center</strong>, and follow the same steps: <em>Your information and permissions → Download your information → Some of your information → Followers and following</em>, JSON format, all time.</p>
<p>Instagram prepares the file and notifies you — usually within minutes. Then go back to <em>Download your information</em> and download the ZIP file to your phone or computer.</p>

<h2>Step 2: Open the file in the unfollowers tracker</h2>
<p>Open the tracker and choose the ZIP file you downloaded (you don't need to unzip it). If you've already unzipped it, choose the <code>followers_1.json</code> and <code>following.json</code> files instead.</p>
{{tool:instagram-unfollowers-tracker}}
<p>You'll instantly see three lists:</p>
<ul>
<li><strong>Don't follow you back</strong> — accounts you follow that don't follow you. This is the one most people want.</li>
<li><strong>You don't follow back</strong> — your followers that you don't follow.</li>
<li><strong>Mutual</strong> — people who follow each other.</li>
</ul>
<p>Each name links to the profile, shows the date you followed them, and can be searched. You can also copy all usernames or download the list as a CSV file. Your file is processed in your browser and is never uploaded.</p>

<h2>"Don't follow back" vs "unfollowed you"</h2>
<p>The list shows a snapshot: everyone you follow who isn't following you <em>at the moment your file was created</em>. That includes people who unfollowed you, but also accounts that never followed you — celebrities, brands and news pages, for example. Scan the list and you'll usually recognise the people who matter.</p>

<h2>How to find out exactly who unfollowed you recently</h2>
<p>Because Instagram's download is a snapshot, the way to catch new unfollowers is to compare two downloads taken at different times:</p>
<ol class="steps">
<li>Download your data today and keep the ZIP file.</li>
<li>In a week or a month, download it again.</li>
<li>Open each file in the tracker and copy the <strong>Don't follow you back</strong> usernames from each.</li>
<li>Paste the old list and the new list into <a href="/text-compare">Text Compare</a>. Names that appear only in the new list are people you follow who have unfollowed you since your first download.</li>
</ol>
{{tool:text-compare}}

<h2>Checking one person manually</h2>
<p>If you only want to check a single account, open <strong>your profile → Followers</strong> and type their username into the search box. If they don't show up, they don't follow you. This is fine for one or two people, but slow for hundreds — that's where the data download helps.</p>

<h2>Things to keep in mind</h2>
<ul>
<li><strong>Private and deactivated accounts.</strong> If someone deactivates their account, they disappear from your lists until they come back, so they can look like an unfollow.</li>
<li><strong>Blocks.</strong> If someone blocked you, they also disappear from your followers.</li>
<li><strong>Don't over-check.</strong> Follower counts naturally go up and down, and some removals are Instagram cleaning out spam or inactive accounts.</li>
</ul>
`,
};
