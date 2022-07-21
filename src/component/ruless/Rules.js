import RuleChilde from "./RulesChilde/RulesChilde";

function Rules() {
  return (
    <>
      <section class="page-header -type-1">
        <div class="container">
          <div class="page-header__content">
            <div class="row justify-center text-center">
              <div class="col-auto">
                <div data-anim="slide-up delay-1" class="is-in-view">
                  <h1 class="page-header__title">Our rules</h1>
                </div>

                <div data-anim="slide-up delay-2" class="is-in-view">
                  <p class="page-header__text">
                    We’re on a mission to deliver engaging, curated courses at a
                    reasonable price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="layout-pb-lg">
        <div data-anim-wrap="" class="container animated">
          <RuleChilde />
        </div>
      </section>
    </>
  );
}
export default Rules;
