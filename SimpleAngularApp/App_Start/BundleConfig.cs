using System.Web.Optimization;

namespace SimpleAngularApp
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/angularjs").Include(
                        "~/Scripts/angular.js"));

            bundles.Add(new ScriptBundle("~/bundles/myApp").Include(
                        "~/Static/js/app.js"));
        }
    }
}
