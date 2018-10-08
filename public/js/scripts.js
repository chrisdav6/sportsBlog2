$(() => {

  $(".category-delete").on("click", (e) => {
    $target = $(e.target);
    $.ajax({
      type: "DELETE",
      url: "/categories/delete/" + $target.attr("data-cat-id"),
      success: (response) => {
        window.location.href = "/manage/categories";
      },
      error: (error) => {
        console.log(error);
      }
    })
  });

  $(".article-delete").on("click", (e) => {
    $target = $(e.target);
    $.ajax({
      type: "DELETE",
      url: "/articles/delete/" + $target.attr("data-article-id"),
      success: (response) => {
        window.location.href = "/manage/articles";
      },
      error: (error) => {
        console.log(error);
      }
    })
  });

});