// HTML 구조파악이 끝난 후 실행
$(function () {
  // 대상을 변수에 저장
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  // console.log($menu);

  // 메뉴 영역에 마우스가 들어왔을 때
  $menu.on('mouseenter', function () {
    // 해당 메뉴의 서브메뉴를 slide down
    // $submenu.stop().slideDown(duration);
    $(this).find($submenu).stop().slideDown(duration);

    // 해당 메뉴에 on 클래스 부여
    $(this).addClass('on');
  });

  // 메뉴 영역에 마우스가 나갈 때
  $menu.on('mouseleave', function () {
    // 서브메뉴를 slide up
    $submenu.stop().slideUp(duration);

    // 모든 메뉴에서 on 클래스 빼기
    $menu.removeClass('on');
  });
});
