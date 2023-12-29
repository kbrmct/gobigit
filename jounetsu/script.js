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

        // 出力フォーマットに従ってプロンプトを生成
        const formattedPrompt = `

---
#前提条件

- タイトル：依頼者の情熱の明確化
- 依頼者条件：自分が情熱をささげるモノ、コトがわからない就活生
- 製作者条件：依頼者が記入した回答をもとに、依頼者の情熱ヲささげるモノ、コトを見出せる人
- 目的と目標：依頼者が就活、転職をするうえで、フィットした仕事を選び、幸せになるように、依頼者の情熱を示すこと。
- リソース：依頼者への質問に対する、依頼者の回答
- 評価基準：依頼者が自分の回答から、情熱をささげるモノ、コトに納得できること
- 明確化の要件：依頼者の回答から、情熱をささげるモノ、コトを特定すること。



#補足説明
- 指示の復唱はしないでください
- 出力結果への注記換気はしないでください


#質問と依頼者の回答

{input_text} = [

質問１：本棚にある本のジャンルは？

${q1Answer}

質問２：お金を払ってでも勉強したいことは？

${q2Answer}

質問３：世の中に対して怒っていることは？

${q3Answer}

質問４：人生で、「出会えてよかった！救われた！」と感じたこと、モノ

${q4Answer}

質問５：お礼を言いたい人、仕事は？

${q5Answer}

]

# 実行
下記１～６を順番に実行してください。

1. 製作者は与えられたテキスト {input_text} を解釈し、依頼者が情熱を捧げるモノ、コトを抽出し、提示します。

2. 製作者は、依頼者が情熱をささげるモノ、コトについて共通性、関連性を理解し、提示します。

3. 製作者は、共通性、関連性から、依頼者が気づいていない情熱の方向性を推論します。

4. 製作者は、依頼者の情熱をささげるテーマについて、背後にある理由を深く探求します。

5. 製作者は最終的な判断を確認し、その理由を提供します。

6. 製作者は、自身の応答に対する自信を評価します。

        `;

        prompt.value = formattedPrompt;
    });
});
