// カウントダウン関数
function countdown(elementId, seconds) {
    const countdownElement = document.getElementById(elementId);
    let remainingSeconds = seconds;
    countdownElement.textContent = remainingSeconds;

    const countdownInterval = setInterval(() => {
        remainingSeconds--;
        countdownElement.textContent = remainingSeconds;

        if (remainingSeconds <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    // 質問1のカウントダウン
    document.getElementById("startQ1").addEventListener("click", () => {
        countdown("countdownQ1", 180);
    });

    // 質問2のカウントダウン
    document.getElementById("startQ2").addEventListener("click", () => {
        countdown("countdownQ2", 180);
    });

    // 質問3のカウントダウン
    document.getElementById("startQ3").addEventListener("click", () => {
        countdown("countdownQ3", 180);
    });

    // 質問4のカウントダウン
    document.getElementById("startQ4").addEventListener("click", () => {
        countdown("countdownQ4", 180);
    });

    // 質問5のカウントダウン
    document.getElementById("startQ5").addEventListener("click", () => {
        countdown("countdownQ5", 180);
    });

    // 質問6のカウントダウン
    document.getElementById("startQ6").addEventListener("click", () => {
        countdown("countdownQ5", 180);
    });

// プロンプトコピー用のボタンを追加
    document.getElementById("copyPrompt").addEventListener("click", () => {
        const promptTextarea = document.getElementById("prompt");
    
    // テキストを選択
        promptTextarea.select();
        promptTextarea.setSelectionRange(0, 99999); // モバイルデバイス向けの選択範囲指定
    
    // コピー
        document.execCommand("copy");
    
    // ボタンのテキストを変更
        document.getElementById("copyPrompt").textContent = "コピーしました！";
    
    // 2秒後に元のテキストに戻す
        setTimeout(() => {
                document.getElementById("copyPrompt").textContent = "プロンプトをコピー";
        }, 2000);
    });


    // プロンプト生成ボタンのクリックイベント
    document.getElementById("generatePrompt").addEventListener("click", () => {
        const prompt = document.getElementById("prompt");
        const q1Answer = document.getElementById("Q1").value.trim();
        const q2Answer = document.getElementById("Q2").value.trim();
        const q3Answer = document.getElementById("Q3").value.trim();
        const q4Answer = document.getElementById("Q4").value.trim();
        const q5Answer = document.getElementById("Q5").value.trim();
        const q6Answer = document.getElementById("Q6").value.trim();

        // 出力フォーマットに従ってプロンプトを生成
        const formattedPrompt = `
#前提条件

- タイトル：依頼者の人生の価値観、働く目的の明確化
- 依頼者条件：自分の人生の価値観、働く目的を明確にしたい就活生
- 製作者条件：依頼者が記入した回答をもとに、価値観、働く目的を見出せる人
- 目的と目標：依頼者の人生の価値観、働く目的を明確にすること
- リソース：依頼者への質問に対する、依頼者の回答
- 評価基準：依頼者が自分の価値観、働く目的に納得できること
- 明確化の要件：依頼者の回答から、価値観を特定すること

#価値観
価値観リスト={受容：ありのままの自分を受け入れてもらう,正確：自分の意見や信念正しく伝える,達成：なにか重要なことを達成する,冒険：新しくてワクワクする体験をする,魅力：身体的な魅力を保つ,権威：他者に対して責任を持って指導する,自治：人まかせにしないで自分で決める,美的：身のまわりの美しいものを味わう,庇護：他者のめんどうをみる,挑戦：難しい仕事や問題に取り組む,変化：変化に富んだバラエティ豊かな人生を送る,快適：喜びに満ちた快適な人生を送る,誓約：絶対に破れない約束や近いを結ぶ,慈愛：他者を心配して助ける,貢献：世界の役に立つことをする,協調：他者と強力して何かをする,礼儀：他者に対して誠実で礼儀正しく接する,創造：新しくて斬新なアイデアを生む,信頼：信用があって頼れる人間になる,義務：自分の義務と責任を果たす,調和：周囲の環境と調和しながら生きる,興奮：スリルと刺激に満ちた人生を送る,貞節：パートナーにウソをつかず誠実に生きる,名声：有名になって存在を認めれる,家族：幸福で愛に満ちた家庭を作る,体力：丈夫で強い身体を保つ,柔軟：新たな環境にも簡単になじむ,許し：他人を許しながら生きる,友情：親密で助け合える友人を作る,愉楽：遊んで楽しむこと,寛大：自分の物を他人にあたえる,真実：自分が正しいと思うとおりに行動する,信教：自分を超えた存在の意思を考える,成長：変化と成長を維持する,健康：健やかで体調よく生きる,有益：他人の役に立つこと,正直：ウソをつかず正直に生きる,希望：ポジティブで楽観的に生きる,謙遜：地味で控えめに生きる,笑い：人生や世界のユーモラスな側面を見る,独立：他者に依存しないで生きる,勤勉：自分の仕事に一生懸命取り組む,平安：自分の内面の平和を維持する,親密：プライベートな体験を他人とシェアする,正義：すべての人を公平に扱う,知識：価値ある知識を学ぶ、または生み出す,余暇：自分の時間をリラックスして楽しむ,寵愛：親しい人から愛される,愛慕：誰かに愛をあたえる,熟達：いつもの仕事・作業に習熟する,現在：いまの瞬間に集中して生きる,適度：過剰を避けてほどよいところを探す,単婚：唯一の愛し合える相手を見つける,反抗：権威やルールに疑問を持って挑む,配慮：他人を心づかって世話すること,開放：新たな体験、発想、選択肢に心を開く,秩序：整理されて秩序のある人生を送る,情熱：なんらかの発想、活動、人々に深い感情を抱く,快楽：良い気分になること,人気：多くの人に好かれる,権力：他人をコントロールする,目的：人生の意味を方向性を定める,合理：理性と論理に従う,現実：現実的、実践的にふるまう,責任：責任をもって行動する,危険：リスクを取ってチャンスを手に入れる,恋愛：興奮して燃えるような恋をする,安全：安心感を得る,受諾：ありのままの自分を受け入れる,自制：自分の行動を自分でコントロールする,自尊：自分に自信を持つ,自知：自分について深い理解を持つ,献身：誰かに奉仕する,性愛：活動的で満足のいく性生活を送る,単純：シンプルでミニマルな暮らしをする,孤独：他人から離れて１人でいられる時間と空間を持つ,精神：精神的に成長し成熟する,安定：いつも一定して変化のない人生を送る,寛容：自分と違う存在を尊重して受け入れる,伝統：過去から受け継がれてきたパターンを尊重する}

#実行:
1.質問1から6に対する各回答に該当する価値観を、価値観リストから推論し、割り当てて、表示する。質問5の回答は、避けたい価値観であることに留意すること。

2.依頼者の価値観をグルーピングし、マインドマップにして表示する。

3.特に、大きなグルーピングが何か示す。

4.質問6の回答から、依頼者の価値観にマッチした仕事の目的の事例を提示する。


#補足説明
- 指示の復唱はしないでください
- 出力結果への注記換気はしないでください


#質問と依頼者の回答
## 質問1：尊敬する人とその理由。
${q1Answer}

## 質問2：幼いころ、思春期にあった大きな影響を与えた経験
${q2Answer}

## 質問3：今の社会に足りないものは？
${q3Answer}

## 質問4：他人に助言するとき、一番伝えたいことは
${q4Answer}

## 質問5：他人に助言するとき、伝えたくないことは。
${q5Answer}

## 質問6：あなたが、周りの人に価値を提供しようとした経験。
${q6Answer}

#成果物:
1.質問1から6に対する各回答に該当する価値観
2.依頼者の価値観をグルーピングした、マインドマップ
3.特に、大きなグルーピングの提示
4.質問6の回答から、依頼者の価値観にマッチした仕事の目的の事例を提示


        `;

        prompt.value = formattedPrompt;
    });
});
