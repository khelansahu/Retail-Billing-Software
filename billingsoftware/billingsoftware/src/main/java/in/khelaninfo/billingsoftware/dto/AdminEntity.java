package in.khelaninfo.billingsoftware.dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminEntity {

	@Id
	private long id;
	private String name;
	private String email;
	private String password;
	
}
