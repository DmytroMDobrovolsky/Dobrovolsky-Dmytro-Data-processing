package lab5.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import lab5.entity.User;

@CrossOrigin(origins = "*")
@RepositoryRestResource(path = "users", collectionResourceRel = "users")
public interface userRepository extends JpaRepository<User, Integer> {

//  List<User> findByLastName(@Param("name") String name);

}