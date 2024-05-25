
const onClickAdd = () => {
  const inputText = document.getElementById("addtext").value;
  document.getElementById("addtext").value = "";
  createincomptodo(inputText);
};

const createincomptodo = (todo) => {
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = "disp";

  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  const compbutton = document.createElement("button");
  compbutton.innerText = "完了";
  compbutton.addEventListener("click", () => {
    const moveTarget = compbutton.closest("li");
    compbutton.nextElementSibling.remove();
    compbutton.remove();

    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      createincomptodo(todo);
      backbutton.closest("li").remove();
    });

    moveTarget.firstElementChild.appendChild(backbutton);

    document.getElementById("comp-list").appendChild(moveTarget);
  });

  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    const deleteTarget = deletebutton.closest("li");
    document.getElementById("uncomp-list").removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(compbutton);
  div.appendChild(deletebutton);
  li.appendChild(div);

  document.getElementById("uncomp-list").appendChild(li);
};

document.getElementById("addbutton").addEventListener("click", onClickAdd);
