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

        // 出力フォーマットに従ってプロンプトを生成
        const formattedPrompt = `
#前提条件

- タイトル：依頼者の才能の明確化
- 依頼者条件：自分が無意識のうちにやっている得意なこと、才能がわからない就活生
- 製作者条件：依頼者が記入した回答をもとに、依頼者の得意なことから才能を見出せる人
- 目的と目標：依頼者が就活、転職をするうえで、フィットした仕事を選び、幸せになるように、依頼者の才能を示すこと。
- リソース：依頼者への質問に対する、依頼者の回答
- 評価基準：依頼者が自分の得意なことから、才能を導出すること
- 明確化の要件：依頼者の回答から、得意なことを特定すること。
　　　　　　　特定された得意なことから依頼者の才能を導出すること。


#実行:
1.質問1～4に対する各回答を用いて、依頼者の得意なことをキーワードで示してください。
2.　1で出力された得意なことのキーワードから、依頼者の才能を導出してください。

#補足説明
- 指示の復唱はしないでください
- 出力結果への注記換気はしないでください


#質問と依頼者の回答

## 質問1：これまでの人生で充実していた体験は？
${q1Answer}

## 質問2:最近イラっとした、ことは？
${q2Answer}


## 質問3:家族や友人に聞いた「自分の長所」は？
${q3Answer}


## 質問4:明日仕事を辞める場合にもっとやりたかったことは？
${q4Answer}


# 成果物

1.質問1～4に対する各回答を用いて、依頼者の得意なことをキーワードで示す。
2.　1で出力された得意なことのキーワードから、依頼者の才能を導出してください。

        `;

        prompt.value = formattedPrompt;
    });
});
