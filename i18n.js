// i18n.js — Core internationalisation engine for LoveLiveValues
var TRANSLATIONS = {
    en: {
        // Landing page
        start_button: "Click here to start!",
        explore_button: "Explore Community Results",
        what_is: "What is LoveLiveValues?",
        description_para1: 'LoveLiveValues is a compass test for Love Live fans and concert goers. Inspired by <a href="http://sapplypoliticalcompass.com/">SapplyValues</a>, it places you on two axes based on your opinions and concert behaviour.',
        description_para2: "You will be presented with a series of statements. For each one, answer from <b>Strongly Agree</b> to <b>Strongly Disagree</b>, and your responses will determine where you land on the compass.",
        num_questions: "There are <b><u>{n}</u></b> questions in the test.",
        axes_title: "The Axes",
        deg_vs_civ_title: "Degenerate vs. Civilized (X axis)",
        deg_vs_civ_deg: "<b>Degenerate</b> &mdash; You glaze over the idols, comment on their body parts, post things like \"I wish to be stepped on by her\", go \"WOOOOOOAHHHHH\" with no meaningful comment when a picture is posted, and are generally the definition of a simp.",
        deg_vs_civ_civ: "<b>Civilized</b> &mdash; You appreciate the idols and their performances without losing your composure. You can discuss them without devolving into glazing or simping.",
        yak_vs_bor_title: "Yakkai vs. Boring (Y axis)",
        yak_vs_bor_yak: '<b>Yakkai</b> &mdash; You do "ie taiga", mixing calls like "tora hi jinzou seni ama shindou kasen", gachikoi koujou, 3ren kahen, and similar calls that are common in 3D idol culture but frowned upon at Love Live concerts. You break UOs (Ultra Orange glowsticks) during slow songs when everyone else is waving blue, cyclone your penlight overhead during calm moments, and generally exhibit behaviour that makes your renbans (seat partners) uncomfortable.',
        yak_vs_bor_bor: "<b>Boring</b> &mdash; You don't jump during songs, never break UOs, just wave your electric penlight while standing still, and don't even do the classic calls like hai calls, PPPH, or fuwa fuwa. You're at the concert, but barely participating.",

        // Instructions
        instructions_title: "Instructions",
        instructions_text: "You will be presented with a series of statements. For each one, click the button with your opinion on it.",
        proceed_shuffled: "Proceed (Shuffled)",
        proceed_unshuffled: "Proceed (Unshuffled)",
        go_back: "Go Back",

        // Quiz
        question_n_of_m: "Question {n} of {m}",
        strongly_agree: "Strongly Agree",
        agree: "Agree",
        neutral: "Neutral / Unsure",
        disagree: "Disagree",
        strongly_disagree: "Strongly Disagree",
        back: "Back",

        // Results
        results_title: "Results",
        enter_nickname: "Enter a nickname to see your results",
        nickname_placeholder: "Nickname (required)",
        nickname_error: "Please enter a nickname.",
        submit: "Submit",
        submitting: "Submitting...",
        hint_download: "Hint: you can download this image directly. No need to screenshot!",
        hint_twitter_image: "To share the image on X/Twitter, download it first and attach it manually to your tweet.",
        compass_x_axis: "Degenerate / Civilzed Axis (x): ",
        compass_y_axis: "Yakkai / Boring Axis (y): ",
        network_error: "Network error. Please try again.",
        results_back: "Back",
        results_explore: "Explore Community Results",
        share_twitter: "Share to X",
        share_tweet_text: "My LoveLiveValues result: Degenerate/Civilized {x}, Yakkai/Boring {y}! Take the quiz:",

        // Explore
        explore_title: "Explore",
        loading_results: "Loading community results...",
        th_nickname: "Nickname",
        th_deg: "Deg.",
        th_yak: "Yak.",
        home: "Home",
        take_quiz: "Take the Quiz",
        n_results_shared: "{n} results shared by the community",
        no_results: "No results shared yet. Be the first!",
        sharing_not_configured: "Community sharing is not configured yet.",
        load_failed: "Failed to load results. Please try again later.",
        zoom_reset: "Reset",

        // Feedback
        all_done: "All done!",
        see_results: "See my results!",
        do_quiz: "Do the quiz!",
        go_button: "Go!",
        refuse: "Refuse",
        refuse_dont_know: "Refuse / Don't know",
        click_to_choose: "Click to choose",
        next_button: "Next!",
        feedback_initial_question: "Did you complete this test in a serious (or at least unironic) manner?"
    },
    ja: {
        // Landing page
        start_button: "テストを始める！",
        explore_button: "コミュニティの結果を見る",
        what_is: "LoveLiveValuesとは？",
        description_para1: 'LoveLiveValuesは、ラブライブ！ファンやライブ参加者のためのコンパステストです。SapplyValuesに触発され、ライブでの行動や考え方に基づいてあなたを2つの軸に配置します。',
        description_para2: "強く賛成から強く反対までの中から回答すると、コンパス上のあなたの位置が決まります。",
        num_questions: "これから提示される<b><u>{n}</u></b>質問について。",
        axes_title: "軸について",
        deg_vs_civ_title: "変態 vs. 紳士的（X軸）",
        deg_vs_civ_deg: "<b>変態</b> — アイドルを崇拝し、身体の特徴についてコメントし、「彼女に踏まれたい」などと投稿し、写真が投稿されると意味のあるコメントなしに「うおおおおお」と叫び、まさに変態の定義そのものです。",
        deg_vs_civ_civ: "<b>紳士的</b> &mdash; 冷静さを保ちながらアイドルとそのパフォーマンスを楽しめます。崇拝や変態に陥ることなく議論できます。",
        yak_vs_bor_title: "厄介 vs. 地蔵（Y軸）",
        yak_vs_bor_yak: "<b>厄介</b> &mdash; 「イエッタイガー！」を叫び、「虎火人造繊維暗黒振動下線」などのMIXを打ったり、ガチ恋口上、可変３連MIXなどの3Dアイドル文化で一般的だがラブライブ！のライブでは好まれないコールをします。静かな曲で皆がブルーを振っている時にUO（ウルトラオレンジ）を焚いたり、軽率にペンライトを頭上でグルグルしたり、連番者（隣の席の人）を不快にさせる行動をします。",
        yak_vs_bor_bor: "<b>地蔵</b> &mdash; 飛びポでジャンプせず、UOも折らず、ただペンライトを持ちながら立ちつくすしているだけで、裏打ちコールやPPPH、ふわふわなどの定番コールすらしません。ライブ会場にいるけど、ほとんど参加していません。",

        // Instructions
        instructions_title: "説明",
        instructions_text: "一連の文章が提示されます。それぞれについて、あなたの意見に合ったボタンをクリックしてください。",
        proceed_shuffled: "進む（シャッフル）",
        proceed_unshuffled: "進む（順番通り）",
        go_back: "戻る",

        // Quiz
        question_n_of_m: "質問 {n} / {m}",
        strongly_agree: "とてもそう思う",
        agree: "ややそう思う",
        neutral: "どちらでもない",
        disagree: "あまりそう思わない",
        strongly_disagree: "全くそう思わない",
        back: "戻る",

        // Results
        results_title: "結果",
        enter_nickname: "ニックネームを入力して結果を見ましょう",
        nickname_placeholder: "ニックネーム（必須）",
        nickname_error: "ニックネームを入力してください。",
        submit: "送信",
        submitting: "送信中...",
        hint_download: "ヒント：この画像は直接ダウンロードできます。スクリーンショットは不要です！",
        hint_twitter_image: "X/Twitterで画像をシェアするには、まず画像をダウンロードしてツイートに手動で添付してください。",
        compass_x_axis: "変態 / 紳士的 軸 (x): ",
        compass_y_axis: "厄介 / 地蔵軸 (y): ",
        network_error: "ネットワークエラー。もう一度お試しください。",
        results_back: "戻る",
        results_explore: "コミュニティの結果を見る",
        share_twitter: "Xでシェア",
        share_tweet_text: "LoveLiveValuesの結果：変態/紳士的 {x}、厄介/地蔵 {y}！あなたもやってみよう：",

        // Explore
        explore_title: "探索",
        loading_results: "コミュニティの結果を読み込み中...",
        th_nickname: "ニックネーム",
        th_deg: "変態",
        th_yak: "厄介",
        home: "ホーム",
        take_quiz: "テストを受ける",
        n_results_shared: "コミュニティで{n}件の結果が共有されています",
        no_results: "まだ結果がありません。最初の投稿者になりましょう！",
        sharing_not_configured: "コミュニティ共有はまだ設定されていません。",
        load_failed: "結果の読み込みに失敗しました。後でもう一度お試しください。",
        zoom_reset: "リセット",

        // Feedback
        all_done: "完了！",
        see_results: "結果を見る！",
        do_quiz: "クイズをする！",
        go_button: "決定！",
        refuse: "回答しない",
        refuse_dont_know: "回答しない / わからない",
        click_to_choose: "クリックして選択",
        next_button: "次へ！",
        feedback_initial_question: "このテストを真剣に（少なくとも皮肉でなく）受けましたか？"
    },
    "zh-CN": {
        // Landing page
        start_button: "点击开始测试！",
        explore_button: "查看社区结果",
        what_is: "什么是 LoveLiveValues？",
        description_para1: 'LoveLiveValues 是一个面向 Love Live 粉丝与演唱会参与者的“坐标测试”。灵感来自 <a href="http://sapplypoliticalcompass.com/">SapplyValues</a>，会根据你的观点与现场行为将你定位在两个轴上。',
        description_para2: "你会看到一系列陈述。请从<b>非常同意</b>到<b>非常不同意</b>进行选择，你的回答将决定你在坐标图上的位置。",
        num_questions: "本测试共有 <b><u>{n}</u></b> 道题。",
        axes_title: "两个轴",
        deg_vs_civ_title: "变态 vs. 文明（X 轴）",
        deg_vs_civ_deg: "<b>变态</b> &mdash; 你会过度迷恋偶像、评论身体部位、发“想被她踩”等发言，看到照片就只会“哇啊啊啊”而没有实际内容，整体上就是“痴迷粉”的典型。",
        deg_vs_civ_civ: "<b>文明</b> &mdash; 你会在保持克制的前提下欣赏偶像与演出，不会陷入无脑吹捧或失控发言。",
        yak_vs_bor_title: "厄介 vs. 木桩（Y 轴）",
        yak_vs_bor_yak: '<b>厄介</b> &mdash; 你会喊“イエッタイガー”、打 “tora hi jinzou seni ama shindou kasen” 等 MIX、ガチ恋口上、3 连可变等在 3D 偶像场景常见但在 Love Live 现场常被反感的 call。慢歌时大家都在摇蓝色你却折 UO（超橙），平稳段落还在头顶疯狂转灯，常让身边连番不适。',
        yak_vs_bor_bor: "<b>木桩</b> &mdash; 你不跳、不折 UO，只是站着轻轻挥电棒，连 hai call、PPPH、fuwa fuwa 这些经典 call 都不做。人到了现场但几乎不参与。",

        // Instructions
        instructions_title: "说明",
        instructions_text: "你会看到一系列陈述。请点击最符合你看法的按钮。",
        proceed_shuffled: "继续（随机顺序）",
        proceed_unshuffled: "继续（原顺序）",
        go_back: "返回",

        // Quiz
        question_n_of_m: "第 {n} 题 / 共 {m} 题",
        strongly_agree: "非常同意",
        agree: "同意",
        neutral: "中立 / 不确定",
        disagree: "不同意",
        strongly_disagree: "非常不同意",
        back: "返回",

        // Results
        results_title: "结果",
        enter_nickname: "输入昵称以查看你的结果",
        nickname_placeholder: "昵称（必填）",
        nickname_error: "请输入昵称。",
        submit: "提交",
        submitting: "提交中...",
        hint_download: "提示：你可以直接下载这张图片，无需截图！",
        hint_twitter_image: "如需在 X/Twitter 分享图片，请先下载图片，再手动附加到推文中。",
        compass_x_axis: "变态 / 文明 轴 (x): ",
        compass_y_axis: "厄介 / 木桩 轴 (y): ",
        network_error: "网络错误，请重试。",
        results_back: "返回",
        results_explore: "查看社区结果",
        share_twitter: "分享到 X",
        share_tweet_text: "我的 LoveLiveValues 结果：变态/文明 {x}，厄介/木桩 {y}！来测测看：",

        // Explore
        explore_title: "探索",
        loading_results: "正在加载社区结果...",
        th_nickname: "昵称",
        th_deg: "变态",
        th_yak: "厄介",
        home: "主页",
        take_quiz: "开始测试",
        n_results_shared: "社区已分享 {n} 条结果",
        no_results: "还没有人分享结果，快来当第一个！",
        sharing_not_configured: "社区分享功能尚未配置。",
        load_failed: "结果加载失败，请稍后再试。",
        zoom_reset: "重置",

        // Feedback
        all_done: "完成！",
        see_results: "查看我的结果！",
        do_quiz: "去做测试！",
        go_button: "确定！",
        refuse: "拒绝回答",
        refuse_dont_know: "拒绝回答 / 不知道",
        click_to_choose: "点击选择",
        next_button: "下一步！",
        feedback_initial_question: "你是否以认真（至少不是反讽）的态度完成了这份测试？"
    }
};

function getLang() {
    var supported = ["en", "ja", "zh-CN"];
    try {
        var lang = localStorage.getItem("llv_lang") || "zh-CN";
        return supported.indexOf(lang) !== -1 ? lang : "zh-CN";
    } catch (e) {
        return "zh-CN";
    }
}

function setLang(lang) {
    try {
        localStorage.setItem("llv_lang", lang);
    } catch (e) {}
}

function t(key, replacements) {
    var lang = getLang();
    var str = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || (TRANSLATIONS.en[key]) || key;
    if (replacements) {
        for (var k in replacements) {
            str = str.split("{" + k + "}").join(replacements[k]);
        }
    }
    return str;
}

function applyTranslations() {
    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
        els[i].textContent = t(els[i].getAttribute("data-i18n"));
    }
    var htmlEls = document.querySelectorAll("[data-i18n-html]");
    for (var i = 0; i < htmlEls.length; i++) {
        htmlEls[i].innerHTML = t(htmlEls[i].getAttribute("data-i18n-html"));
    }
    var phEls = document.querySelectorAll("[data-i18n-placeholder]");
    for (var i = 0; i < phEls.length; i++) {
        phEls[i].placeholder = t(phEls[i].getAttribute("data-i18n-placeholder"));
    }
}

function injectLangToggle() {
    var langOrder = ["en", "ja", "zh-CN"];
    var nextLabel = {
        en: "日本語",
        ja: "简体中文",
        "zh-CN": "English"
    };
    var btn = document.createElement("button");
    btn.id = "langToggle";
    var currentLang = getLang();
    var currentIndex = langOrder.indexOf(currentLang);
    var nextIndex = (currentIndex + 1) % langOrder.length;
    btn.textContent = nextLabel[currentLang];
    btn.addEventListener("click", function () {
        setLang(langOrder[nextIndex]);
        location.reload();
    });
    document.body.appendChild(btn);
}

// Set html lang attribute
document.documentElement.lang = getLang();
