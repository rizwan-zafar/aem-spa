package com.etisalat.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import java.util.Collections;
import java.util.List;

@Model(
        adaptables = {SlingHttpServletRequest.class, Resource.class},
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        resourceType = "etisalat/components/ewallet/header",
        adapters = ComponentExporter.class
)
 public class HeaderModel implements ComponentExporter {

    @ValueMapValue
    private String homeUrl;

    @ValueMapValue
    private String logo;

    @ValueMapValue
    private String title;

    @ChildResource(name = "navigationPages")
    private List<NavigationItem> navigationPages;

    public String getHomeUrl() {
        return homeUrl;
    }

    public String getLogo() {
        return logo;
    }

    public String getTitle() {
        return title;
    }

    public List<NavigationItem> getNavigationItems() {
        return navigationPages != null ? navigationPages : Collections.emptyList();
    }

    @Override
    public String getExportedType() {
        return "etisalat/components/ewallet/header";
    }

    @Model(adaptables = Resource.class)
    public static class NavigationItem {

        @ValueMapValue
        private String pageUrl;

        @ValueMapValue
        private String pageLabel;

        public String getPageUrl() {
            return pageUrl;
        }

        public String getPageLabel() {
            return pageLabel;
        }
    }
}
