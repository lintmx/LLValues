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
        compass_x_axis: "Degenerate / Civilzed Axis (x): ",
        compass_y_axis: "Yakkai / Boring Axis (y): ",
        network_error: "Network error. Please try again.",
        results_back: "Back",
        results_explore: "Explore Community Results",

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
        description_para1: 'LoveLiveValuesは、ラブライブ！ファンやライブ参加者のためのコンパステストです。<a href="http://sapplypoliticalcompass.com/">SapplyValues</a>に触発され、あなたの意見やライブでの行動に基づいて2つの軸に配置します。',
        description_para2: "一連の文章が提示されます。それぞれについて<b>強く賛成</b>から<b>強く反対</b>までの中から回答すると、コンパス上のあなたの位置が決まります。",
        num_questions: "テストには<b><u>{n}</u></b>問の質問があります。",
        axes_title: "軸について",
        deg_vs_civ_title: "変態 vs. 紳士的（X軸）",
        deg_vs_civ_deg: "<b>変態</b> &mdash; アイドルを崇拝し、体のパーツについてコメントし、「彼女に踏まれたい」などと投稿し、写真が投稿されると意味のあるコメントなしに「うおおおおお」と叫び、まさにシンプの定義そのものです。",
        deg_vs_civ_civ: "<b>紳士的</b> &mdash; 冷静さを保ちながらアイドルとそのパフォーマンスを楽しめます。崇拝やシンプに陥ることなく議論できます。",
        yak_vs_bor_title: "厄介 vs. つまらない（Y軸）",
        yak_vs_bor_yak: "<b>厄介</b> &mdash; 「いえたいがー」をやったり、「虎火人造繊維暗黒振動下線」などのMIXを打ったり、ガチ恋口上、3連家変などの3Dアイドル文化で一般的だがラブライブ！のライブでは好まれないコールをします。静かな曲で皆がブルーを振っている時にUO（ウルトラオレンジ）を折ったり、穏やかな瞬間にペンライトを頭上でサイクロンしたり、連番（隣の席の人）を不快にさせる行動をします。",
        yak_vs_bor_bor: "<b>つまらない</b> &mdash; 曲中にジャンプせず、UOも折らず、電子ペンライトを振りながら立っているだけで、はいコールやPPPH、ふわふわなどの定番コールすらしません。ライブにいるけど、ほとんど参加していません。",

        // Instructions
        instructions_title: "説明",
        instructions_text: "一連の文章が提示されます。それぞれについて、あなたの意見に合ったボタンをクリックしてください。",
        proceed_shuffled: "進む（シャッフル）",
        proceed_unshuffled: "進む（順番通り）",
        go_back: "戻る",

        // Quiz
        question_n_of_m: "質問 {n} / {m}",
        strongly_agree: "強く賛成",
        agree: "賛成",
        neutral: "どちらでもない",
        disagree: "反対",
        strongly_disagree: "強く反対",
        back: "戻る",

        // Results
        results_title: "結果",
        enter_nickname: "ニックネームを入力して結果を見ましょう",
        nickname_placeholder: "ニックネーム（必須）",
        nickname_error: "ニックネームを入力してください。",
        submit: "送信",
        submitting: "送信中...",
        hint_download: "ヒント：この画像は直接ダウンロードできます。スクリーンショットは不要です！",
        compass_x_axis: "変態 / 紳士的 軸 (x): ",
        compass_y_axis: "厄介 / つまらない軸 (y): ",
        network_error: "ネットワークエラー。もう一度お試しください。",
        results_back: "戻る",
        results_explore: "コミュニティの結果を見る",

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
    }
};

function getLang() {
    try {
        return localStorage.getItem("llv_lang") || "en";
    } catch (e) {
        return "en";
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
    var btn = document.createElement("button");
    btn.id = "langToggle";
    btn.textContent = getLang() === "ja" ? "English" : "\u65E5\u672C\u8A9E";
    btn.addEventListener("click", function () {
        setLang(getLang() === "ja" ? "en" : "ja");
        location.reload();
    });
    document.body.appendChild(btn);
}

// Set html lang attribute
document.documentElement.lang = getLang();
