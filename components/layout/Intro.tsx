import { site } from "@/data/site";

/*
 * First-visit intro. Pure CSS so it never waits for hydration; the inline
 * script in the root layout adds `no-intro` to <html> for repeat visits
 * within the same session, and once the intro has finished so client-side
 * navigations do not inherit its delay.
 */
export function Intro() {
  return (
    <div className="intro" aria-hidden>
      <div className="flex flex-col items-center gap-5">
        <span className="intro__mark font-display text-[clamp(4rem,12vw,7rem)] font-semibold leading-none tracking-[-0.06em]">
          Y
        </span>
        <span className="intro__name t-wordmark text-[0.7rem]">{site.name.toLocaleUpperCase("tr-TR")}</span>
      </div>
    </div>
  );
}

export const introScript = `(function(){var d=document.documentElement;function done(){d.classList.add("no-intro")}try{var k="ym-intro";if(sessionStorage.getItem(k)){done()}else{sessionStorage.setItem(k,"1");setTimeout(done,1800)}}catch(e){setTimeout(done,1800)}})();`;
