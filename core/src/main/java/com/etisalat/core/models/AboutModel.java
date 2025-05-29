package com.etisalat.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.Collections;
import java.util.List;

@Model(
        adaptables = {SlingHttpServletRequest.class, Resource.class},
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        resourceType = "etisalat/components/ewallet/about",
        adapters = ComponentExporter.class
)
 public class AboutModel implements ComponentExporter {

    @ValueMapValue
    private String name;

    @ValueMapValue
    private String description;

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    @ChildResource(name = "aboutCards")
    private List<AboutCardItem> aboutCards;

    public List<AboutCardItem> getAboutCardItems() {
        return aboutCards != null ? aboutCards : Collections.emptyList();
    }

    @Override
    public String getExportedType() {
        return "etisalat/components/ewallet/about";
    }

    @Model(adaptables = Resource.class)
    public static class AboutCardItem {

        @ValueMapValue
        private String image;

        @ValueMapValue
        private String title;

        @ValueMapValue
        private String description;

        public String getImage() {
            return image;
        }

        public String getTitle() {
            return title;
        }

        public String getDescription() {
            return description;
        }
    }
}
