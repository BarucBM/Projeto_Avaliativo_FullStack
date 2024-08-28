package car_rent.api.application.vehicle;

import car_rent.api.domain.vehicle.VehicleType;
import car_rent.api.domain.vehicle.VehicleModel;
import org.springframework.data.jpa.domain.Specification;

public class VehicleSpecification {
    protected static Specification<VehicleModel> hasType(VehicleType type){
        return ((root, query, criteriaBuilder) -> {
            if (type == null) return null;
            else return criteriaBuilder.equal(root.get("type"), type);
        });
    }

    protected static Specification<VehicleModel> hasYear(Integer year){
        return ((root, query, criteriaBuilder) -> {
            if(year != null ) return criteriaBuilder.equal(root.get("year"), year);
            else return null;
        });
    }

    protected static Specification<VehicleModel> hasColor(String color){
        return ((root, query, criteriaBuilder) ->
            color == null? null:
                criteriaBuilder.like(criteriaBuilder.lower(root.get("color")), "%" + color.toLowerCase() +"%"));
    }

    protected static Specification<VehicleModel> hasRented(Boolean rented){
        return ((root, query, criteriaBuilder) -> {
            return (rented == null) ? null: criteriaBuilder.equal(root.get("rented"), rented);
        });
    }

    protected static Specification<VehicleModel> hasBrand(String brand) {
        return (root, query, criteriaBuilder) ->
                brand == null ? null : criteriaBuilder.like(criteriaBuilder.lower(root.get("brand")), "%" + brand.toLowerCase() + "%");
    }

    protected static Specification<VehicleModel> hasModel(String model) {
        return (root, query, criteriaBuilder) ->
                model == null ? null : criteriaBuilder.like(criteriaBuilder.lower(root.get("model")), "%" + model.toLowerCase() + "%");
    }

    protected static Specification<VehicleModel> hasLicensePlate(String licensePlate) {
        return (root, query, criteriaBuilder) ->
                licensePlate == null ? null : criteriaBuilder.like(criteriaBuilder.lower(root.get("licensePlate")), "%" + licensePlate.toLowerCase() + "%");
    }

    public static Specification<VehicleModel> hasRentedStatus(boolean rented) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("rented"), rented);
    }
}
