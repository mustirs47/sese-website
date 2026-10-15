import { describe, expect, it } from "vitest";
import { allServices, divisions, facilityCategories, findServiceAnywhere, getDivisionAndService } from "@/data/divisions";

describe("site-wide service fields", () => {
  it("exposes exactly the three agreed fields", () => {
    expect(divisions.map(d => d.slug)).toEqual(["sicherheit", "facility", "event-service"]);
    expect(facilityCategories.every(d => d.parent === "facility")).toBe(true);
  });

  it("keeps saved Facility service addresses resolvable with the new canonical owner", () => {
    for (const category of facilityCategories) {
      for (const service of category.services) {
        expect(getDivisionAndService(category.slug, service.slug)?.service).toBe(service);
        expect(findServiceAnywhere(service.slug)?.division.slug).toBe("facility");
      }
    }
  });

  it("keeps event security separate from operational guest service", () => {
    expect(findServiceAnywhere("veranstaltungsschutz")?.division.slug).toBe("sicherheit");
    expect(findServiceAnywhere("gaestebetreuung")?.division.slug).toBe("event-service");
  });

  it("has unique complete canonical services", () => {
    const services = allServices();
    expect(new Set(services.map(s => s.service.slug)).size).toBe(services.length);
    for (const { service } of services) {
      expect(service.h1.length).toBeGreaterThan(5);
      expect(service.metaDescription.length).toBeGreaterThan(80);
      expect(service.faqs.length).toBeGreaterThan(0);
    }
  });
});