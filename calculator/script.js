
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
//stor

    let input = "";

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const value = btn.innerText;

        if (value === "=") {
          try {
            input = eval(input.replace(/x/g, "*"));
          } catch {
            input = "Error";
          }
        } else if (value === "RESET") {
          input = "";
        } else if (value === "DEL") {
          input = input.slice(0, -1);
        } else {
          input += value;
        }

    

      });
    });
