package car_rent.api.domain.vehicle;

import car_rent.api.domain.rental.RentalModel;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.*;

@Entity
@Table(name = "vehicle")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VehicleModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "Tipo de veículo é obrigatório.")
    private VehicleType type = VehicleType.CAR;

    private String color;
    private String image_url;

    @NotNull(message = "Ano é obrigatório.")
    @Positive(message = "O ano deve ser um número positivo.")
    @Min(value = 2000, message = "O ano deve ser maior ou igual a 2000.")
    private Integer year;

    @NotBlank(message = "Marca é obrigatória.")
    private String brand;

    @NotBlank(message = "Modelo é obrigatório.")
    private String model;

    @Column(unique = true)
    @NotBlank(message = "Placa é obrigatória.")
    private String licensePlate;

    private Boolean rented = false;

    @OneToOne
    @JsonIgnore
    private RentalModel rental;
}
